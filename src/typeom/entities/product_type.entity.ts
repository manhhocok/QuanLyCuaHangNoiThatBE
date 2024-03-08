import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from './product.entity';

@Entity({ name: 'product_type' })
export class ProductType {
  @PrimaryGeneratedColumn()
  type_id: number;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  image: string;
  @OneToMany(() => Product, (product) => product.productType)
  product: Product[];
}
