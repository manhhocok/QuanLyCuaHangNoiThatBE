import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Product } from 'src/typeom/entities/product.entity';
import { User } from 'src/typeom/entities/user.entity';

export class bodyCustomerDto {
  @ApiProperty()
  @IsNotEmpty()
  user: User;
  @ApiProperty()
  @IsNotEmpty()
  product: Product;
  @ApiProperty()
  @IsNotEmpty()
  voucher: number;
  @ApiProperty()
  @IsNotEmpty()
  listed_price: number;
  price: number;
  @ApiProperty()
  @IsNotEmpty()
  quantity: number;
  @ApiProperty()
  @IsNotEmpty()
  total_price: number;
}
