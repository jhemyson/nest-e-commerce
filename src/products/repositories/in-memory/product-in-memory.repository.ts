import { Product } from "../../interfaces/product.interface";
import { v4 as uuid } from 'uuid';
import { IProductRespository } from "../i-product.repository";

export class ProductInMemoryRepository implements IProductRespository {
    private product: Product[] = []

    create({ name, price, images }: Product): Product {
        const newProduct: Product = {
            id: uuid(),
            name,
            price, 
            images
        }

        this.product.push(newProduct);

        return newProduct;
    }

    findAll(): Product[] {
        return this.product;
    }
}