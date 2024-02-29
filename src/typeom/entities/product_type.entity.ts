import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
