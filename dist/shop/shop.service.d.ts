import { CreateShopInput } from './dto/create-shop.input';
import { UpdateShopInput } from './dto/update-shop.input';
export declare class ShopService {
    create(createShopInput: CreateShopInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateShopInput: UpdateShopInput): string;
    remove(id: number): string;
}
