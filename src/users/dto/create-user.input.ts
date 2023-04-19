import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  street: string;
  
  @Field(() => String)
  state: string;

  @Field(() => String)
  city: string;

  @Field(() => String)
  zip: string;

  @Field(() => String)
  status: string;
}
