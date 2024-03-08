import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/typeom/entities/product.entity';
import { bodyProductParams } from 'src/utils/type';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private repository: Repository<Product>,
  ) {}

  findAll() {
    return this.repository.find({ relations: ['category', 'productType'] });
  }

  findOne(product_id: number) {
    return this.repository.findOne({
      where: {
        product_id,
      },
      relations: ['category', 'productType'],
    });
  }

  create(body: bodyProductParams) {
    const newProduct = this.repository.create({ ...body });
    return this.repository.save(newProduct);
  }

  edit(product_id: number, body: bodyProductParams) {
    return this.repository.update(product_id, { ...body });
  }

  remove(product_id: number) {
    return this.repository.delete(product_id);
  }
}
