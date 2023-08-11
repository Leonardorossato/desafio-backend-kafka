import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  firstName: string;

  @Column({ nullable: false })
  lastName: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  phone: string;
}
