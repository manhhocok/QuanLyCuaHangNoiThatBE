import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerOrder } from 'src/typeom/entities/customer_order.entity';
import { bodyCustomerOrderParams } from 'src/utils/type';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerOrdersService {
  constructor(
    @InjectRepository(CustomerOrder)
    private repository: Repository<CustomerOrder>,
  ) {}

  findAll() {
    return this.repository.find();
  }

  findOne(order_id: number) {
    return this.repository.findOneBy({ order_id });
  }

  create(body: bodyCustomerOrderParams) {
    const newCustomerOrder = this.repository.create({ ...body });
    return this.repository.save(newCustomerOrder);
  }

  edit(order_id: number, body: bodyCustomerOrderParams) {
    return this.repository.update(order_id, { ...body });
  }

  remove(order_id: number) {
    return this.repository.delete(order_id);
  }
}
