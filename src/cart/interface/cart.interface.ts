import { Customer } from './customer.interface';
import { CartItem } from './item.interface';

export interface Cart {
  id: number;
  items: CartItem[];
  customer: Customer;
}
