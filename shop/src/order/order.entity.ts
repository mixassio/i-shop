import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from '../users/users.entity';
import { Product } from '../product/product.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 250, unique: true })
  key: string;

  @Column({ length: 250, unique: false })
  title: string;

  @ManyToOne(
    type => User,
    user => user.orders,
  )
  user: User;

  @OneToMany(
    type => Product,
    product => product.order,
  )
  products: Product[];
}
