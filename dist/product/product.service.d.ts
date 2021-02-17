import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
export declare class ProductService {
    create(createProductInput: CreateProductInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateProductInput: UpdateProductInput): string;
    remove(id: number): string;
}
