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
        name: 'cart-abandoned',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'cart',
            brokers: ['localhost:9092'], // Sua configuração de brokers Kafka aqui
          },
          consumer: {
            groupId: 'cart-abandoned',
          },
        },
      },
    ]),
  ],
})
export class AppModule {}
