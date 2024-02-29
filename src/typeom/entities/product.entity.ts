import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from './category.entity';
import { ProductType } from './product_type.entity';

@Entity({ name: 'product' })
export class Product {
  @PrimaryGeneratedColumn()
  product_id: number;
  @Column()
  listed_price: number;
  @Column()
  price: number;
  @Column()
  name: number;
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
}
