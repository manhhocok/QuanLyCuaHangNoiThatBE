import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  getListProducts(): string {
    return 'get list products';
  }
  createProduct(): string {
    return 'create product';
  }
  detailProduct(id: string): string {
    return 'detail product';
  }
  updateProduct(id: string): string {
    return 'update product';
  }
  deleteProduct(id: string): string {
    return 'delete product';
  }
}
