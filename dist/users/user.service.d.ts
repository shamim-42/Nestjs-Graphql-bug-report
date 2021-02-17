import { CreateUserInputType } from './user.dto';
import { UpdateUserInput } from './user.dto';
export declare class UserService {
    create(createUserInput: CreateUserInputType): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUserInput: UpdateUserInput): string;
    remove(id: number): string;
}
