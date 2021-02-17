import { ProductService } from './product.service';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
export declare class ProductResolver {
    private readonly productService;
    constructor(productService: ProductService);
    create(createProductInput: CreateProductInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(updateProductInput: UpdateProductInput): string;
    remove(id: number): string;
}
