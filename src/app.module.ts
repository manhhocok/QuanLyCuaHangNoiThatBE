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
import { dataSourceOptions } from 'db/data-source';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    UsersModule,
    CategoriesModule,
    ProductTypesModule,
    VouchersModule,
    ProductsModule,
    CustomerOrdersModule,
    ThrottlerModule.forRoot([
      {
        name: 'long',
        ttl: 60000,
        limit: 100,
      },
      {
        name: 'short',
        ttl: 100,
        limit: 3,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
