import { Product } from "../interfaces/product.interface";

export interface IProductRespository {
    create(product: Product): Product
    
    findAll() : Product[]
}