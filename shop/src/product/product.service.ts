import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}
  // getters
  async getProducts(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async getProductByProjectKey(key: string): Promise<Product> {
    return await this.productRepository.findOne({ key });
  }
  // seters
  async createProduct(product: CreateProductDto): Promise<Product> {
    return this.productRepository.save(product);
  }
  // helpers
}
