import { Shop } from '../../shop/entities/shop.entity';
export declare class User {
    id: number;
    name: string;
    phone: string;
    email: string;
    password: string;
    created: Date;
    shops: Shop[];
    hashPassword(): Promise<void>;
    comparePassword(attempt: string): Promise<boolean>;
    toResponseObject(showToken?: boolean): any;
    private get token();
}
