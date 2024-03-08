import { bodyProductDto } from 'src/products/dtos/bodyProduct.dto';
import { bodyUserDto } from 'src/users/dtos/bodyUser.dto';

export class bodyCustomerDto {
  user: bodyUserDto;
  product: bodyProductDto;
  voucher: number;
  listed_price: number;
  price: number;
  quantity: number;
  total_price: number;
}
