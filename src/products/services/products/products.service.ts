import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryProductDto } from 'src/products/dtos/bodyProduct.dto';
import { Product } from 'src/typeom/entities/product.entity';
import { bodyProductParams } from 'src/utils/type';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private repository: Repository<Product>,
  ) {}

  async countRecords() {
    return await this.repository
      .createQueryBuilder('product')
      .select('COUNT(*)', 'count')
      .getRawOne();
  }

  findAll(query: QueryProductDto) {
    // return this.repository.find({
    //   relations: ['category', 'productType', 'material'],
    // });

    var category_id = `and product.category_id = ${query.category_id}`;
    var material_id = `and product.material_id = ${query.material_id}`;
    var type_id = `and product.type_id = ${query.type_id}`;
    return this.repository
      .createQueryBuilder('product') // Sử dụng alias 'product' cho bảng Product
      .leftJoinAndSelect('product.category', 'category') // Giả sử mối quan hệ là `category`
      .leftJoinAndSelect('product.productType', 'productType') // Giả sử mối quan hệ là `productType`
      .leftJoinAndSelect('product.material', 'material') // Giả sử mối quan hệ là `material`
      .limit(query.pageSize ? query.pageSize : 25) // Lấy 10 cái
      .offset(query.page ? query.page * query.pageSize : 0) // Bỏ qua 10 cái đầu
      .where(
        ` product.name LIKE :name  ${query.category_id ? category_id : ''} ${query.material_id ? material_id : ''} ${query.type_id ? type_id : ''}`,
        {
          name: `%${query.name ? query.name : ''}%`,
        },
      ) // Sử dụng biến `name` và thêm `%` vào giá trị
      .getMany();
  }

  findOne(product_id: number) {
    return this.repository.findOne({
      where: {
        product_id,
      },
      relations: ['category', 'productType', 'material'],
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
