import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCompanyInput {
  @Field(() => String)
  company: string
  @Field(() => String)
  status: string
}
