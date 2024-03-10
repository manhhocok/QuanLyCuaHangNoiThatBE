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
  @PrimaryGeneratedColumn({ type: 'int' })
  category_id: number;
  @Column('varchar', { length: 200 })
  name: string;
  @Column('varchar', { length: 2000 })
  description: string;
  @Column('varchar', { length: 1000 })
  image: string;
  @OneToMany(() => Product, (product) => product.category)
  product: Product[];
}
