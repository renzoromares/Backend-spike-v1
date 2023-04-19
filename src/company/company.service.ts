import { Injectable } from '@nestjs/common';
import { CreateCompanyInput } from './dto/create-company.input';
import { UpdateCompanyInput } from './dto/update-company.input';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';

@Injectable()
export class CompanyService {

  constructor(
    @InjectRepository(Company)
    private readonly userRepository: Repository<Company>,
  ) {}

  async create(createCompanyInput: CreateCompanyInput) {
     const company = this.userRepository.create(createCompanyInput)
     return await this.userRepository.save(company)
  }

  async findAll(status: string){
    const companies = await this.userRepository.find({ where: { status}})
    return companies
  }

  findOne(id: number) {
    return `This action returns a #${id} company`;
  }

  update(id: string, updateCompanyInput: UpdateCompanyInput) {
    return `This action updates a #${id} company`;
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
