import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { User } from './typeom/entities/user.entity';
import { UsersModule } from './users/users.module';
import { Category } from './typeom/entities/category.entity';
import { CategoriesModule } from './categories/categories.module';
import { ProductTypesModule } from './product_types/product_types.module';
import { ProductType } from './typeom/entities/product_type.entity';
import { VouchersModule } from './vouchers/vouchers.module';
import { Voucher } from './typeom/entities/voucher.entity';
import { Product } from './typeom/entities/product.entity';
import { ProductsModule } from './products/products.module';
import { CustomerOrdersModule } from './customer_orders/customer_orders.module';
import { CustomerOrder } from './typeom/entities/customer_order.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'furniture_store',
      entities: [User, Category, ProductType, Voucher, Product, CustomerOrder],
      synchronize: true,
    }),
    UsersModule,
    CategoriesModule,
    ProductTypesModule,
    VouchersModule,
    ProductsModule,
    CustomerOrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
