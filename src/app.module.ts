import { Module } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { ConfigModule } from '@nestjs/config';
import { ItemsModule } from './items/items.module';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [CustomerModule, ConfigModule.forRoot({ isGlobal: true }), ItemsModule, CartModule],
})
export class AppModule {}
