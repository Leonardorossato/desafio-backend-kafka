import { Body, Controller, Headers, Post } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create.cart.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('/abandoned')
  async create(@Body() dto: CreateCartDto) {
    return await this.cartService.processCartAbandoned(dto);
  }
}
