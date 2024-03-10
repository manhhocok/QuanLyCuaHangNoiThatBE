import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Category } from 'src/typeom/entities/category.entity';
import { Material } from 'src/typeom/entities/materials.entity';
import { ProductType } from 'src/typeom/entities/product_type.entity';

export class bodyProductDto {
  @ApiProperty()
  @IsNotEmpty()
  listed_price: number;
  @ApiProperty()
  @IsNotEmpty()
  price: number;
  @ApiProperty()
  @IsNotEmpty()
  name: string;
  @ApiProperty()
  @IsNotEmpty()
  dimensions: string;
  @ApiProperty()
  @IsNotEmpty()
  available: string;
  @ApiProperty()
  @IsNotEmpty()
  description: string;
  @ApiProperty()
  @IsNotEmpty()
  image: string;
  @ApiProperty()
  @IsNotEmpty()
  status: boolean;
  @ApiProperty()
  @IsNotEmpty()
  material: Material;
  @ApiProperty()
  @IsNotEmpty()
  type: ProductType;
  @ApiProperty()
  @IsNotEmpty()
  category: Category;
}
