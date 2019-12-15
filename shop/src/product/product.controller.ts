import {
  Controller,
  Get,
  Post,
  Response,
  Body,
  HttpStatus,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll(): Promise<Product[]> {
    return this.productService.getProducts();
  }

  @Post()
  async createProject(
    @Response() res: any,
    @Body() createProductDto: CreateProductDto,
  ) {
    if (!createProductDto || !createProductDto.key || !createProductDto.title) {
      return res
        .status(HttpStatus.FORBIDDEN)
        .json({ message: 'Key, title and description are required!' });
    }

    let project = await this.productService.getProductByProjectKey(
      createProductDto.key,
    );

    if (project) {
      return res
        .status(HttpStatus.FORBIDDEN)
        .json({ message: 'Project exists' });
    } else {
      project = await this.productService.createProduct(createProductDto);
    }

    return res.status(HttpStatus.OK).json(project);
  }
}
