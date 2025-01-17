import { ReactNode, useState } from 'react';
import styled from '@emotion/styled';
import { AnimatePresence, LayoutGroup } from 'framer-motion';
import { useRecoilValue } from 'recoil';

import { currentUserState } from '@/auth/states/currentUserState';
import { Button, ButtonVariant } from '@/ui/button/components/Button';
import { TextInput } from '@/ui/input/components/TextInput';
import { Modal } from '@/ui/modal/components/Modal';
import { debounce } from '~/utils/debounce';

interface DeleteModalProps {
  isOpen: boolean;
  title: string;
  subtitle: ReactNode;
  setIsOpen: (val: boolean) => void;
  handleConfirmDelete: () => void;
  deleteButtonText?: string;
}

const StyledTitle = styled.div`
  font-size: ${({ theme }) => theme.font.size.lg};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
`;

const StyledSubtitle = styled.div`
  text-align: center;
`;

const StyledModal = styled(Modal)`
  color: ${({ theme }) => theme.font.color.primary};
  > * + * {
    margin-top: ${({ theme }) => theme.spacing(8)};
  }
`;

const StyledCenteredButton = styled(Button)`
  justify-content: center;
`;

export const StyledDeleteButton = styled(StyledCenteredButton)`
  border-color: ${({ theme }) => theme.color.red20};
  box-shadow: none;
  color: ${({ theme }) => theme.color.red};
  font-size: ${({ theme }) => theme.font.size.md};
  line-height: ${({ theme }) => theme.text.lineHeight.lg};
  :hover {
    background-color: ${({ theme }) => theme.color.red10};
  }
`;

export function DeleteModal({
  isOpen = false,
  title,
  subtitle,
  setIsOpen,
  handleConfirmDelete,
  deleteButtonText = 'Delete',
}: DeleteModalProps) {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const currentUser = useRecoilValue(currentUserState);
  const userEmail = currentUser?.email;

  const handleEmailChange = (val: string) => {
    setEmail(val);
    isEmailMatchingUserEmail(val, userEmail);
  };

  const isEmailMatchingUserEmail = debounce(
    (email1?: string, email2?: string) => {
      setIsValidEmail(Boolean(email1 && email2 && email1 === email2));
    },
    250,
  );

  return (
    <AnimatePresence mode="wait">
      <LayoutGroup>
        <StyledModal isOpen={isOpen} onOutsideClick={() => setIsOpen(!isOpen)}>
          <StyledTitle>{title}</StyledTitle>
          <StyledSubtitle>{subtitle}</StyledSubtitle>
          <TextInput
            value={email}
            onChange={handleEmailChange}
            placeholder={userEmail}
            fullWidth
            key={'email-' + userEmail}
          />
          <StyledDeleteButton
            onClick={handleConfirmDelete}
            variant={ButtonVariant.Secondary}
            title={deleteButtonText}
            disabled={!isValidEmail || !email}
            fullWidth
          />
          <StyledCenteredButton
            onClick={() => setIsOpen(false)}
            variant={ButtonVariant.Secondary}
            title="Cancel"
            fullWidth
            style={{
              marginTop: 10,
            }}
          />
        </StyledModal>
      </LayoutGroup>
    </AnimatePresence>
  );
}
