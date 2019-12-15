import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Order } from '../order/order.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 250, unique: true })
  key: string;

  @Column({ length: 250, unique: false })
  title: string;

  @ManyToOne(
    type => Order,
    order => order.products,
  )
  order: Order;
}
