import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}
  // getters
  async getOrders(): Promise<Order[]> {
    return await this.orderRepository.find();
  }

  async getOrderByKey(key: string): Promise<Order> {
    return await this.orderRepository.findOne({ key });
  }
  // seters
  async createOrder(order: CreateOrderDto): Promise<Order> {
    return this.orderRepository.save(order);
  }
  // helpers
}
