import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { bodyProductTypeDto } from 'src/product_types/dtos/bodyProductType.dto';
import { ProductTypesService } from 'src/product_types/services/product_types/product_types.service';

@Controller('api/product_types')
export class ProductTypesController {
  constructor(private ProductTypesService: ProductTypesService) {}

  @Get()
  getListProductTypes() {
    return this.ProductTypesService.findAll();
  }

  @Get(':type_id')
  getDetailProductTypes(@Param('type_id') type_id: number) {
    return this.ProductTypesService.findOne(type_id);
  }

  @Post()
  createProductType(@Body() data: bodyProductTypeDto) {
    return this.ProductTypesService.create(data);
  }

  @Put(':type_id')
  async updateProductType(
    @Param('type_id') type_id: number,
    @Body() data: bodyProductTypeDto,
  ) {
    await this.ProductTypesService.edit(type_id, data);
    return this.getListProductTypes();
  }

  @Delete(':type_id')
  async deleteProductType(@Param('type_id') type_id: number) {
    await this.ProductTypesService.remove(type_id);
    return this.getListProductTypes();
  }
}
