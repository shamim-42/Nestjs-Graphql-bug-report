import { ShopService } from './shop.service';
import { CreateShopInput } from './dto/create-shop.input';
import { UpdateShopInput } from './dto/update-shop.input';
export declare class ShopResolver {
    private readonly shopService;
    constructor(shopService: ShopService);
    create(createShopInput: CreateShopInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(updateShopInput: UpdateShopInput): string;
    remove(id: number): string;
}
