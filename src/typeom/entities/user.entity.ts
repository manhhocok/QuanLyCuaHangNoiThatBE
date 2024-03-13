import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CustomerOrder } from './customer_order.entity';
import { Product } from './product.entity';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  account_id: number;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  name: string;
  @Column()
  sdt: Number;
  @Column()
  avt: string;

  @OneToMany(() => CustomerOrder, (custome) => custome.order_id)
  customerOrder: CustomerOrder[];

  // @ManyToMany(() => Product, (product) => product.favoriteUsers)
  // @JoinTable({
  //   name: 'user_favorite',
  //   joinColumn: { name: 'account_id', referencedColumnName: 'account_id' },
  //   inverseJoinColumn: {
  //     name: 'product_id',
  //     referencedColumnName: 'product_id',
  //   },
  // })
  // favorite: Product[];
}
