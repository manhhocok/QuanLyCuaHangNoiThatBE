import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateProductDto {
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
  material_id: number;
  @ApiProperty()
  @IsNotEmpty()
  type_id: number;
  @ApiProperty()
  @IsNotEmpty()
  category_id: number;
}

export class UpdateProductDto {
  @ApiProperty()
  listed_price: number;
  @ApiProperty()
  price: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  dimensions: string;
  @ApiProperty()
  available: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  image: string;
  @ApiProperty()
  status: boolean;
  @ApiProperty()
  material_id: number;
  @ApiProperty()
  type_id: number;
  @ApiProperty()
  category_id: number;
}

export class QueryProductDto {
  @ApiPropertyOptional()
  @IsOptional()
  name?: string;
  @ApiPropertyOptional()
  @IsOptional()
  material_id?: number;
  @ApiPropertyOptional()
  @IsOptional()
  type_id?: number;
  @ApiPropertyOptional()
  @IsOptional()
  category_id?: number;
  @ApiPropertyOptional()
  @IsOptional()
  page?: number;
  @ApiPropertyOptional()
  @IsOptional()
  pageSize?: number;
}
