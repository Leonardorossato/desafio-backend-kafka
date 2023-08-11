import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  async create(dto: CreateCustomerDto) {
    try {
      const customer = await this.customerRepository.create(dto);
      await this.customerRepository.save(customer);
      return customer;
    } catch (error) {
      throw new HttpException(
        'Erro ao criar um cliente',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  findAll() {
    return `This action returns all customer`;
  }
}
