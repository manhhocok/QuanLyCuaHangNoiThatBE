import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CustomerOrder } from './customer_order.entity';

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
}
