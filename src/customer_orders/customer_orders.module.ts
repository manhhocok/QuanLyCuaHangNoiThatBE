import { Module } from '@nestjs/common';
import { CustomerOrdersController } from './controllers/customer_orders/customer_orders.controller';
import { CustomerOrdersService } from './services/customer_orders/customer_orders.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerOrder } from 'src/typeom/entities/customer_order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerOrder])],
  controllers: [CustomerOrdersController],
  providers: [CustomerOrdersService],
})
export class CustomerOrdersModule {}
