import { Category } from 'src/typeom/entities/category.entity';
import { ProductType } from 'src/typeom/entities/product_type.entity';

export type bodyUserParams = {
  email: string;
  password: string;
  name: string;
  sdt: Number;
  avt: string;
};

export type bodyCategorieParams = {
  name: string;
  description: string;
  image: string;
};

export type bodyProductTypeParams = {
  name: string;
  description: string;
  image: string;
};

export type bodyVoucherParams = {
  name: string;
  description: string;
  image: string;
};

export type bodyProductParams = {
  listed_price: number;
  price: number;
  name: string;
  material: string;
  dimensions: string;
  available: string;
  description: string;
  image: string;
  productType: ProductType;
  category: Category;
};

export type bodyCustomerOrderParams = {
  user: bodyUserParams;
  product: bodyProductParams;
  voucher: number;
  listed_price: number;
  price: number;
  quantity: number;
  total_price: number;
};
