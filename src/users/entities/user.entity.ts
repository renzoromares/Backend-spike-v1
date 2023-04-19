import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  firstName: string;

  @Column()
  @Field(() => String)
  lastName: string;

  @Column()
  @Field(() => String)
  email: string;

  @Column()
  @Field(() => String)
  street: string;
  
  @Column()
  @Field(() => String)
  state: string;

  @Column()
  @Field(() => String)
  city: string;

  @Column()
  @Field(() => String)
  zip: string;

  @Column()
  @Field(() => String)
  status: string;
}
