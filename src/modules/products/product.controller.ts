import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { ResponseData } from 'src/global/globalClass';
import { HttpMessage, HttpStatus } from 'src/global/globalEnum';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getListProducts(): ResponseData<string> {
    try {
      return new ResponseData<string>(
        this.productService.getListProducts(),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (err) {
      return new ResponseData<string>(
        this.productService.getListProducts(),
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }
  @Post()
  createProduct(): ResponseData<string> {
    try {
      return new ResponseData<string>(
        this.productService.createProduct(),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (err) {
      return new ResponseData<string>(
        this.productService.createProduct(),
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }
  @Get('/:id')
  detailProduct(id: string): ResponseData<string> {
    try {
      return new ResponseData<string>(
        this.productService.deleteProduct(id),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (err) {
      return new ResponseData<string>(
        this.productService.deleteProduct(id),
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }
  @Put('/:id')
  updateProduct(id: string): ResponseData<string> {
    try {
      return new ResponseData<string>(
        this.productService.updateProduct(id),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (err) {
      return new ResponseData<string>(
        this.productService.updateProduct(id),
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }
  @Delete('/:id')
  deleteProduct(id: string): ResponseData<string> {
    try {
      return new ResponseData<string>(
        this.productService.deleteProduct(id),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (err) {
      return new ResponseData<string>(
        this.productService.deleteProduct(id),
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }
}
