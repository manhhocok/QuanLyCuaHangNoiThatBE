import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from './product.entity';

@Entity({ name: 'material' })
export class Material {
  @PrimaryGeneratedColumn()
  material_id: number;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  image: string;
  @OneToMany(() => Product, (product) => product.material)
  product: Product[];
}
