import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CartModule } from './cart/cart.module';
import { Partitioners } from 'kafkajs';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CartModule,
    ClientsModule.register([
      {
        name: 'cart-abandoned', // nome do serviço
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'cart', // id do client do kafka
            brokers: ['localhost:9092'], // Sua configuração de brokers Kafka aqui
          },
          consumer: {
            groupId: 'cart-abandoned', //id do consumer  do kafka
          },
          producer: {
            createPartitioner: Partitioners.LegacyPartitioner,
          },
        },
      },
    ]),
  ],
})
export class AppModule {}
