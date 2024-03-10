import { Category } from 'src/typeom/entities/category.entity';
import { Material } from 'src/typeom/entities/materials.entity';
import { Product } from 'src/typeom/entities/product.entity';
import { ProductType } from 'src/typeom/entities/product_type.entity';
import { User } from 'src/typeom/entities/user.entity';

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
  percent: number;
  description: string;
  image: string;
};
export type bodyMaterialParams = {
  name: string;
  description: string;
  image: string;
};

export type bodyProductParams = {
  listed_price: number;
  price: number;
  name: string;
  dimensions: string;
  available: string;
  description: string;
  image: string;
  status: boolean;
  material: Material;
  type: ProductType;
  category: Category;
};

export type bodyCustomerOrderParams = {
  user: User;
  product: Product;
  voucher: number;
  listed_price: number;
  price: number;
  quantity: number;
  total_price: number;
};
