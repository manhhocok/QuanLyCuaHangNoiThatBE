import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
