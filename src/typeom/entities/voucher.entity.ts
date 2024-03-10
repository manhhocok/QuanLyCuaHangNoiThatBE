import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'voucher' })
export class Voucher {
  @PrimaryGeneratedColumn()
  voucher_id: number;
  @Column()
  name: string;
  @Column()
  percent: number;
  @Column()
  description: string;
  @Column()
  image: string;
}
