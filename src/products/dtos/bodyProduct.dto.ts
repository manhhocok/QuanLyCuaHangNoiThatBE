import { Category } from 'src/typeom/entities/category.entity';
import { ProductType } from 'src/typeom/entities/product_type.entity';

export class bodyProductDto {
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
}
