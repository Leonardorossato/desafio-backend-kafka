import { Module } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [CustomerModule, ConfigModule.forRoot({ isGlobal: true })],
})
export class AppModule {}
