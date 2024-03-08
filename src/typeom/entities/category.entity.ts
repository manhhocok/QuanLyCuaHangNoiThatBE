import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from './product.entity';

@Entity({ name: 'category' })
export class Category {
  @PrimaryGeneratedColumn()
  category_id: number;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  image: string;
  @OneToMany(() => Product, (product) => product.category)
  product: Product[];
}
