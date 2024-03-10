import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { bodyCustomerDto } from 'src/customer_orders/dtos/bodyCustomer.dto';
import { CustomerOrdersService } from 'src/customer_orders/services/customer_orders/customer_orders.service';
@ApiTags('customer_orders')
@Controller('customer_orders')
export class CustomerOrdersController {
  constructor(private CustomerOrdersService: CustomerOrdersService) {}

  @Get()
  async getListCustomerOrders() {
    return await this.CustomerOrdersService.findAll();
  }

  @Get(':order_id')
  getCustomerOrderDetail(@Param('order_id') order_id: number) {
    return this.CustomerOrdersService.findOne(order_id);
  }

  @Post()
  createCustomerOrder(@Body() body: bodyCustomerDto) {
    return this.CustomerOrdersService.create(body);
  }

  @Put(':order_id')
  async updateCustomerOrder(
    @Param('order_id') order_id: number,
    @Body() body: bodyCustomerDto,
  ) {
    await this.CustomerOrdersService.edit(order_id, body);
    return this.getListCustomerOrders();
  }

  @Delete(':order_id')
  async deleteCustomerOrder(@Param('order_id') order_id: number) {
    await this.CustomerOrdersService.remove(order_id);
    return this.getListCustomerOrders();
  }
}
