import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './interfaces/product.interface';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  private productService =  new ProductsService();

  @Get()
  findAll(): Product[] {
    return this.productService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() product: CreateProductDto): Product {
    return this.productService.create(product);
  }
}
