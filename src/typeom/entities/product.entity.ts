import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from './category.entity';
import { ProductType } from './product_type.entity';
import { CustomerOrder } from './customer_order.entity';

@Entity({ name: 'product' })
export class Product {
  @PrimaryGeneratedColumn()
  product_id: number;
  @Column()
  listed_price: number;
  @Column()
  price: number;
  @Column()
  name: string;
  @Column()
  material: string;
  @Column()
  dimensions: string;
  @Column()
  available: string;
  @Column()
  description: string;
  @Column()
  image: string;

  @ManyToOne(() => ProductType, (productType) => productType.type_id)
  @JoinColumn({ name: 'type_id' })
  productType: ProductType;

  @ManyToOne(() => Category, (category) => category.category_id)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  // @ManyToMany(() => Category, (category) => category.category_id)
  // @JoinTable({
  //   name: 'category',
  //   joinColumn: { name: 'product_id', referencedColumnName: 'product_id' },
  //   inverseJoinColumn: {
  //     name: 'category_id',
  //     referencedColumnName: 'category_id',
  //   },
  // })
  // category: Category[];

  @OneToMany(() => CustomerOrder, (custome) => custome.order_id)
  customerOrder: CustomerOrder[];
}
