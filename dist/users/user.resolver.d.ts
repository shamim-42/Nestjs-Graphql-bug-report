import { UserService } from './user.service';
import { CreateUserInputType } from './user.dto';
import { UpdateUserInput } from './user.dto';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    create(CreateUserInput: CreateUserInputType): string;
    findAll(): string;
    findOne(id: number): string;
    update(updateUserInput: UpdateUserInput): string;
    remove(id: number): string;
}
