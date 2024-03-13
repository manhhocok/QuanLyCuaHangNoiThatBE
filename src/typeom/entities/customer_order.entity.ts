import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from './product.entity';
import { User } from './user.entity';

@Entity({ name: 'customer_order' })
export class CustomerOrder {
  @PrimaryGeneratedColumn()
  order_id: number;
  @Column()
  voucher: number;
  @Column()
  listed_price: number;
  @Column()
  price: number;
  @Column()
  quantity: number;
  @Column()
  total_price: number;

  @Column()
  product_id: number;
  @Column()
  account_id: number;

  @ManyToOne(() => Product, (product) => product.product_id)
  @JoinColumn({ name: 'product_id' })
  product: Product;
  @ManyToOne(() => User, (user) => user.account_id)
  @JoinColumn({ name: 'account_id' })
  user: User;
}
