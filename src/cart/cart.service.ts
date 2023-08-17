import { Injectable } from '@nestjs/common';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';
import { Partitioners } from 'kafkajs';
import { lastValueFrom } from 'rxjs';
import { CreateCartDto } from './dto/create.cart.dto';
@Injectable()
export class CartService {
  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'cart-consumer',
      },
      producer: {
        createPartitioner: Partitioners.LegacyPartitioner,
      },
    },
  })
  client: ClientKafka;

  async onModuleInit() {
    await this.client.subscribeToResponseOf('cart-abandoned');
    await this.client.connect();
  }

  async processCartAbandoned(dto: CreateCartDto) {
    try {
      const value = dto;
      const mappedItems = value.items
        .filter((item) => item.quantity > 0) // Filtrar produtos não comprados
        .map((item) => ({
          id: item.id,
          name: item.name,
          quantity: item.quantity,
        }));
      const projectId = await this.projectId(value.id);

      const opportunity = {
        id: projectId,
        customer: value.customer,
        items: mappedItems,
      };
      const result = await this.createOpportunity(opportunity);
      await lastValueFrom(this.client.emit('cart-abandoned', result));
      return result;
    } catch (error) {
      throw new Error(`Erro ao processar mensagem: ${error.message}`);
    }
  }

  async projectId(projectId: string) {
    const id = projectId;
    if (!id) {
      throw new Error('Id do projeto não pode ser vazio ou nullo');
    }
    return id;
  }

  async createOpportunity(dto: CreateCartDto) {
    try {
      const id = dto.id;
      const customerName = dto.customer;
      const abandonedProducts = dto.items.map((item) => ({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
      }));
      const productsMapping = {};

      abandonedProducts.forEach((product) => {
        const description = `${product.name} (Id: ${product.id}, Quantidade: ${product.quantity})`;
        productsMapping[product.name] = description;
      });
      // Crie os dados da oportunidade
      const opportunityData = {
        id,
        abandonedProducts,
        customerName,
        description: `Cliente abandonou os produtos: ${abandonedProducts
          .map((product) => productsMapping[product.name] || `${product.name}`)
          .join(', ')}`,
      };
      return opportunityData;
    } catch (error) {
      // Tratar erros ao criar a oportunidade no CRM
      throw new Error(`Erro ao criar oportunidade no CRM: ${error.message}`);
    }
  }
}
