import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface';
import { IProductRespository } from './repositories/i-product.repository';

@Injectable()
export class ProductsService {
    private productRepository: IProductRespository;

    findAll(): Product[] {
        return this.productRepository.findAll();
    }

    create(product: Product): Product {
        return this.productRepository.create(product);
    }
}
