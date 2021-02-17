import { CreateTestUserInput } from './dto/create-test-user.input';
import { UpdateTestUserInput } from './dto/update-test-user.input';
export declare class TestUserService {
    create(createTestUserInput: CreateTestUserInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTestUserInput: UpdateTestUserInput): string;
    remove(id: number): string;
}
