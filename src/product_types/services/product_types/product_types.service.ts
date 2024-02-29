import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductType } from 'src/typeom/entities/product_type.entity';
import { bodyCategorieParams } from 'src/utils/type';
import { Repository } from 'typeorm';

@Injectable()
export class ProductTypesService {
  constructor(
    @InjectRepository(ProductType) private repository: Repository<ProductType>,
  ) {}

  findAll() {
    return this.repository.find();
  }

  findOne(type_id: number) {
    return this.repository.findOneBy({ type_id });
  }

  create(data: bodyCategorieParams) {
    const newProductType = this.repository.create({ ...data });
    return this.repository.save(newProductType);
  }

  edit(type_id: number, data: bodyCategorieParams) {
    return this.repository.update(type_id, { ...data });
  }

  remove(type_id: number) {
    return this.repository.delete(type_id);
  }
}
