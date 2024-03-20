import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  CreateProductDto,
  QueryProductDto,
  UpdateProductDto,
} from 'src/products/dtos/bodyProduct.dto';
import { ProductsService } from 'src/products/services/products/products.service';

@ApiTags('products')
@Controller('api/products')
export class ProductsController {
  constructor(private ProductsService: ProductsService) {}

  @Get()
  getListProduct(@Query() query: QueryProductDto) {
    return this.ProductsService.findAll(query);
  }

  @Get(':product_id')
  getProductDetail(@Param('product_id') product_id: number) {
    return this.ProductsService.findOne(product_id);
  }

  @Get('/dem/ok')
  async countRecords() {
    return await this.ProductsService.countRecords();
  }

  @Post()
  createProduct(@Body() body: CreateProductDto) {
    return this.ProductsService.create(body);
  }

  @Patch(':product_id')
  async updateProduct(
    @Param('product_id') product_id: number,
    @Body() body: UpdateProductDto,
  ) {
    await this.ProductsService.edit(product_id, body);
    // return this.getListProduct();
  }

  @Delete(':product_id')
  async deleteProduct(@Param('product_id') product_id: number) {
    await this.ProductsService.remove(product_id);
    // return this.getListProduct();
  }
}
