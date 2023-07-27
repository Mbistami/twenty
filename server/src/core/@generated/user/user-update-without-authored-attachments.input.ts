import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { WorkspaceMemberUpdateOneWithoutUserNestedInput } from '../workspace-member/workspace-member-update-one-without-user-nested.input';
import { CompanyUpdateManyWithoutAccountOwnerNestedInput } from '../company/company-update-many-without-account-owner-nested.input';
import { RefreshTokenUpdateManyWithoutUserNestedInput } from '../refresh-token/refresh-token-update-many-without-user-nested.input';
import { CommentUpdateManyWithoutAuthorNestedInput } from '../comment/comment-update-many-without-author-nested.input';
import { CommentThreadUpdateManyWithoutAuthorNestedInput } from '../comment-thread/comment-thread-update-many-without-author-nested.input';
import { CommentThreadUpdateManyWithoutAssigneeNestedInput } from '../comment-thread/comment-thread-update-many-without-assignee-nested.input';
import { UserSettingsUpdateOneRequiredWithoutUserNestedInput } from '../user-settings/user-settings-update-one-required-without-user-nested.input';

@InputType()
export class UserUpdateWithoutAuthoredAttachmentsInput {

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.IsOptional()
    id?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.IsOptional()
    firstName?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.IsOptional()
    lastName?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    @Validator.IsOptional()
    email?: string;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean()
    @Validator.IsOptional()
    emailVerified?: boolean;

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.IsOptional()
    avatarUrl?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.IsOptional()
    locale?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.IsOptional()
    phoneNumber?: string;

    @Field(() => Date, {nullable:true})
    @Validator.IsDate()
    @Validator.IsOptional()
    lastSeen?: Date | string;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean()
    @Validator.IsOptional()
    disabled?: boolean;

    @HideField()
    passwordHash?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    @Validator.IsJSON()
    @Validator.IsOptional()
    metadata?: any;

    @HideField()
    deletedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @HideField()
    workspaceMember?: WorkspaceMemberUpdateOneWithoutUserNestedInput;

    @Field(() => CompanyUpdateManyWithoutAccountOwnerNestedInput, {nullable:true})
    companies?: CompanyUpdateManyWithoutAccountOwnerNestedInput;

    @HideField()
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput;

    @Field(() => CommentUpdateManyWithoutAuthorNestedInput, {nullable:true})
    comments?: CommentUpdateManyWithoutAuthorNestedInput;

    @Field(() => CommentThreadUpdateManyWithoutAuthorNestedInput, {nullable:true})
    authoredCommentThreads?: CommentThreadUpdateManyWithoutAuthorNestedInput;

    @Field(() => CommentThreadUpdateManyWithoutAssigneeNestedInput, {nullable:true})
    assignedCommentThreads?: CommentThreadUpdateManyWithoutAssigneeNestedInput;

    @Field(() => UserSettingsUpdateOneRequiredWithoutUserNestedInput, {nullable:true})
    settings?: UserSettingsUpdateOneRequiredWithoutUserNestedInput;
}
