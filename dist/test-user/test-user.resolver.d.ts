import { TestUserService } from './test-user.service';
import { CreateTestUserInput } from './dto/create-test-user.input';
import { UpdateTestUserInput } from './dto/update-test-user.input';
export declare class TestUserResolver {
    private readonly testUserService;
    constructor(testUserService: TestUserService);
    create(createTestUserInput: CreateTestUserInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(updateTestUserInput: UpdateTestUserInput): string;
    remove(id: number): string;
}
