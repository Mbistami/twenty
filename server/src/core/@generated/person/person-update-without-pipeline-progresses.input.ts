import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';
import { CompanyUpdateOneWithoutPeopleNestedInput } from '../company/company-update-one-without-people-nested.input';
import { WorkspaceUpdateOneRequiredWithoutPeopleNestedInput } from '../workspace/workspace-update-one-required-without-people-nested.input';

@InputType()
export class PersonUpdateWithoutPipelineProgressesInput {

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
    @Validator.IsString()
    @Validator.IsOptional()
    email?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.IsOptional()
    phone?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.IsOptional()
    city?: string;

    @HideField()
    deletedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CompanyUpdateOneWithoutPeopleNestedInput, {nullable:true})
    company?: CompanyUpdateOneWithoutPeopleNestedInput;

    @HideField()
    workspace?: WorkspaceUpdateOneRequiredWithoutPeopleNestedInput;
}
