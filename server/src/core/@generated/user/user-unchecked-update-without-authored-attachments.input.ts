import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { WorkspaceMemberUncheckedUpdateOneWithoutUserNestedInput } from '../workspace-member/workspace-member-unchecked-update-one-without-user-nested.input';
import { CompanyUncheckedUpdateManyWithoutAccountOwnerNestedInput } from '../company/company-unchecked-update-many-without-account-owner-nested.input';
import { RefreshTokenUncheckedUpdateManyWithoutUserNestedInput } from '../refresh-token/refresh-token-unchecked-update-many-without-user-nested.input';
import { CommentUncheckedUpdateManyWithoutAuthorNestedInput } from '../comment/comment-unchecked-update-many-without-author-nested.input';
import { CommentThreadUncheckedUpdateManyWithoutAuthorNestedInput } from '../comment-thread/comment-thread-unchecked-update-many-without-author-nested.input';
import { CommentThreadUncheckedUpdateManyWithoutAssigneeNestedInput } from '../comment-thread/comment-thread-unchecked-update-many-without-assignee-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutAuthoredAttachmentsInput {

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

    @Field(() => String, {nullable:true})
    settingsId?: string;

    @HideField()
    deletedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @HideField()
    workspaceMember?: WorkspaceMemberUncheckedUpdateOneWithoutUserNestedInput;

    @Field(() => CompanyUncheckedUpdateManyWithoutAccountOwnerNestedInput, {nullable:true})
    companies?: CompanyUncheckedUpdateManyWithoutAccountOwnerNestedInput;

    @HideField()
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => CommentUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput;

    @Field(() => CommentThreadUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    authoredCommentThreads?: CommentThreadUncheckedUpdateManyWithoutAuthorNestedInput;

    @Field(() => CommentThreadUncheckedUpdateManyWithoutAssigneeNestedInput, {nullable:true})
    assignedCommentThreads?: CommentThreadUncheckedUpdateManyWithoutAssigneeNestedInput;
}
