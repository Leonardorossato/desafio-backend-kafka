import { Customer } from 'src/customer/entities/customer.entity';
import { Item } from 'src/items/entities/item.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Item, (items) => items.id)
  items: Item[];

  @ManyToOne(() => Customer, (customer) => customer.id)
  customer: Customer;
}
