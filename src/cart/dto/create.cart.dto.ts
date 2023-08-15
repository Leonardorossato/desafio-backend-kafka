import { ApiProperty } from '@nestjs/swagger';
import { Customer } from '../interface/customer.interface';
import { CartItem } from '../interface/item.interface';

export class CreateCartDto {
  @ApiProperty()
  id: string;

  @ApiProperty({ type: Array })
  items: CartItem[];

  @ApiProperty({ type: Object })
  customer: Customer;
}
