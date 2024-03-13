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
import { Material } from './materials.entity';
import { User } from './user.entity';

@Entity({ name: 'product' })
export class Product {
  @PrimaryGeneratedColumn()
  product_id: number;
  @Column({ default: 0 })
  listed_price: number;
  @Column({ default: 0 })
  price: number;
  @Column('varchar', { length: 255 })
  name: string;
  @Column('varchar', { length: 255 })
  dimensions: string;
  @Column('varchar', { length: 255 })
  available: string;
  @Column('varchar', { length: 2550 })
  description: string;
  @Column('varchar', { length: 1255 })
  image: string;
  @Column({ default: true })
  status: boolean;

  @Column()
  material_id: number;
  @Column()
  type_id: number;
  @Column()
  category_id: number;

  @ManyToOne(() => Material, (productType) => productType.material_id)
  @JoinColumn({ name: 'material_id' })
  material: Material;

  @ManyToOne(() => ProductType, (productType) => productType.type_id)
  @JoinColumn({ name: 'type_id' })
  productType: ProductType;

  @ManyToOne(() => Category, (category) => category.category_id)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @OneToMany(() => CustomerOrder, (custome) => custome.order_id)
  customerOrder: CustomerOrder[];

  // @ManyToMany(() => User, (user) => user.favorite)
  // favoriteUsers: User[];
}
