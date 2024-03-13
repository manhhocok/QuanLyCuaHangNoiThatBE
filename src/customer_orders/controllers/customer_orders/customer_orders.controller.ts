import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  CreateCustomerDto,
  UpdateCustomerDto,
} from 'src/customer_orders/dtos/bodyCustomer.dto';
import { CustomerOrdersService } from 'src/customer_orders/services/customer_orders/customer_orders.service';
@ApiTags('customer_orders')
@Controller('api/customer_orders')
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
  createCustomerOrder(@Body() body: CreateCustomerDto) {
    return this.CustomerOrdersService.create(body);
  }

  @Patch(':order_id')
  async updateCustomerOrder(
    @Param('order_id') order_id: number,
    @Body() body: UpdateCustomerDto,
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
