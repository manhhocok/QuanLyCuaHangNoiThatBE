import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  CreateProductTypeDto,
  UpdateProductTypeDto,
} from 'src/product_types/dtos/bodyProductType.dto';
import { ProductTypesService } from 'src/product_types/services/product_types/product_types.service';

@ApiTags('product_types')
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
  createProductType(@Body() data: CreateProductTypeDto) {
    return this.ProductTypesService.create(data);
  }

  @Patch(':type_id')
  async updateProductType(
    @Param('type_id') type_id: number,
    @Body() data: UpdateProductTypeDto,
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
