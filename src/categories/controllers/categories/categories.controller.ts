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
  UpdateCategorieDto,
  CreateCategorieDto,
} from 'src/categories/dtos/bodyCategory.dto';
import { CategoriesService } from 'src/categories/services/categories/categories.service';

@ApiTags('categories')
@Controller('api/categories')
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
  createCategory(@Body() category: CreateCategorieDto) {
    return this.CategoriesService.create(category);
  }

  @Patch(':category_id')
  async updateCategory(
    @Param('category_id') category_id: number,
    @Body() category: UpdateCategorieDto,
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
