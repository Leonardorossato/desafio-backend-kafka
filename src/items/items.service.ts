import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item) private readonly itemRepository: Repository<Item>,
  ) {}
  async create(dto: CreateItemDto) {
    try {
      const item = await this.itemRepository.create(dto);
      await this.itemRepository.save(item);
      return item;
    } catch (error) {
      throw new HttpException(
        'Erro ao criar este item',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  findAll() {
    return `This action returns all items`;
  }
}
