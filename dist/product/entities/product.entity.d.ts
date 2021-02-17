import { Shop } from "../../shop/entities/shop.entity";
export declare class Product {
    id: number;
    name: string;
    code: string;
    unit_price: number;
    stock: number;
    description: string;
    shop: Shop;
}
