import { Customer } from './customer.interface';
import { CartItem } from './item.interface';

export interface Cart {
  id: string;
  items: CartItem[];
  customer: Customer;
}
