import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { bodyCategorieDto } from 'src/categories/dtos/bodyCategory.dto';
import { CategoriesService } from 'src/categories/services/categories/categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private CategoriesService: CategoriesService) {}

  @Get()
  getListCategory() {
    return this.CategoriesService.findAll();
  }

  @Get(':category_id')
  getCategoryDetail(@Param('category_id') category_id: number) {
    return this.CategoriesService.findOne(category_id);
  }

  @Post()
  createCategory(@Body() category: bodyCategorieDto) {
    return this.CategoriesService.create(category);
  }

  @Put(':category_id')
  async updateCategory(
    @Param('category_id') category_id: number,
    @Body() category: bodyCategorieDto,
  ) {
    await this.CategoriesService.edit(category_id, category);
    return this.getListCategory();
  }

  @Delete(':category_id')
  async deleteCategory(@Param('category_id') category_id: number) {
    await this.CategoriesService.remove(category_id);
    return this.getListCategory();
  }
}
