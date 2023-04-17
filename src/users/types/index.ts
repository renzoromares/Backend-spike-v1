import { FindOneOptions, FindOptionsWhere } from 'typeorm';


export interface MyFindOneOptions<Entity> extends FindOneOptions<Entity> {
  where?: FindOptionsWhere<Entity> | FindOptionsWhere<Entity>[];
  // add additional properties here if needed
}
