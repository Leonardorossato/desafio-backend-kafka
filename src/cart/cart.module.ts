import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { ClientKafka } from '@nestjs/microservices';

@Module({
  controllers: [CartController],
  providers: [CartService, ClientKafka],
})
export class CartModule {}
