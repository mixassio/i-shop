import {
  Controller,
  Get,
  Post,
  Response,
  Body,
  HttpStatus,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from './order.entity';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  findAll(): Promise<Order[]> {
    return this.orderService.getOrders();
  }

  @Post()
  async createProject(
    @Response() res: any,
    @Body() createOrdertDto: CreateOrderDto,
  ) {
    if (!createOrdertDto || !createOrdertDto.key || !createOrdertDto.title) {
      return res
        .status(HttpStatus.FORBIDDEN)
        .json({ message: 'Key, title and description are required!' });
    }

    let project = await this.orderService.getOrderByKey(createOrdertDto.key);

    if (project) {
      return res
        .status(HttpStatus.FORBIDDEN)
        .json({ message: 'Project exists' });
    } else {
      project = await this.orderService.createOrder(createOrdertDto);
    }

    return res.status(HttpStatus.OK).json(project);
  }
}
