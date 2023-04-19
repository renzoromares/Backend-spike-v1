import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Company {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string
  @Column()
  @Field(() => String)
  company: string
  @Column()
  @Field(() => String)
  status: string
}
