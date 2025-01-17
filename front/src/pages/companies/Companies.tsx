import { getOperationName } from '@apollo/client/utilities';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import { GET_COMPANIES } from '@/companies/queries';
import { CompanyTable } from '@/companies/table/components/CompanyTable';
import { CompanyTable as CompanyTableV2 } from '@/companies/table/components/CompanyTableV2';
import { TableActionBarButtonCreateActivityCompany } from '@/companies/table/components/TableActionBarButtonCreateActivityCompany';
import { TableActionBarButtonDeleteCompanies } from '@/companies/table/components/TableActionBarButtonDeleteCompanies';
import { IconBuildingSkyscraper } from '@/ui/icon';
import { WithTopBarContainer } from '@/ui/layout/components/WithTopBarContainer';
import { RecoilScope } from '@/ui/recoil-scope/components/RecoilScope';
import { EntityTableActionBar } from '@/ui/table/action-bar/components/EntityTableActionBar';
import { TableContext } from '@/ui/table/states/TableContext';
import { ACTIVATE_VIEW_FIELDS } from '~/App';
import { useInsertOneCompanyMutation } from '~/generated/graphql';

import { SEARCH_COMPANY_QUERY } from '../../modules/search/queries/search';

const StyledTableContainer = styled.div`
  display: flex;
  width: 100%;
`;

export function Companies() {
  const [insertCompany] = useInsertOneCompanyMutation();

  async function handleAddButtonClick() {
    await insertCompany({
      variables: {
        data: {
          name: '',
          domainName: '',
          address: '',
        },
      },
      refetchQueries: [
        getOperationName(GET_COMPANIES) ?? '',
        getOperationName(SEARCH_COMPANY_QUERY) ?? '',
      ],
    });
  }

  const theme = useTheme();

  const CompanyTableComponent = ACTIVATE_VIEW_FIELDS
    ? CompanyTableV2
    : CompanyTable;

  return (
    <>
      <WithTopBarContainer
        title="Companies"
        icon={<IconBuildingSkyscraper size={theme.icon.size.md} />}
        onAddButtonClick={handleAddButtonClick}
      >
        <RecoilScope SpecificContext={TableContext}>
          <StyledTableContainer>
            <CompanyTableComponent />
          </StyledTableContainer>
          <EntityTableActionBar>
            <TableActionBarButtonCreateActivityCompany />
            <TableActionBarButtonDeleteCompanies />
          </EntityTableActionBar>
        </RecoilScope>
      </WithTopBarContainer>
    </>
  );
}
