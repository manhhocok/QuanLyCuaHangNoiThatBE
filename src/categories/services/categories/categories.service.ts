import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/typeom/entities/category.entity';
import { bodyCategorieParams } from 'src/utils/type';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  findAll() {
    return this.categoryRepository.find();
  }

  findOne(category_id: number) {
    return this.categoryRepository.findOneBy({ category_id });
  }

  create(getCategoryDetail: bodyCategorieParams) {
    const newCategory = this.categoryRepository.create({
      ...getCategoryDetail,
    });
    return this.categoryRepository.save(newCategory);
  }

  edit(category_id: number, getCategoryDetail: bodyCategorieParams) {
    return this.categoryRepository.update(category_id, {
      ...getCategoryDetail,
    });
  }

  remove(category_id: number) {
    return this.categoryRepository.delete(category_id);
  }
}
