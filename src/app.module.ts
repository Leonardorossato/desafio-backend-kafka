import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CartModule } from './cart/cart.module';

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
            clientId: 'cart-abandoned', // id do client do kafka
            brokers: ['kafka:9092'], // Sua configuração de brokers Kafka aqui
          }
        },
      },
    ]),
  ],
})
export class AppModule {}
