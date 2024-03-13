import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateCustomerDto {
  @ApiProperty()
  @IsNotEmpty()
  product_id: number;
  @ApiProperty()
  @IsNotEmpty()
  account_id: number;
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

export class UpdateCustomerDto {
  @ApiProperty()
  product_id: number;
  @ApiProperty()
  account_id: number;
  @ApiProperty()
  voucher: number;
  @ApiProperty()
  listed_price: number;
  price: number;
  @ApiProperty()
  quantity: number;
  @ApiProperty()
  total_price: number;
}
