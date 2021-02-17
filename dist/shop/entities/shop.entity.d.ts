import { Product } from "../../product/entities/product.entity";
import { User } from "../../user/entities/user.entity";
export declare class Shop {
    id: number;
    name: string;
    description: string;
    logo: string;
    banner: string;
    products: Product[];
    members: User[];
    created_by: User;
}
