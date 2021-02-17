export declare class CreateUserInputType {
    name: string;
    phone: string;
    password: string;
}
declare const UpdateUserInput_base: import("@nestjs/common").Type<Partial<CreateUserInputType>>;
export declare class UpdateUserInput extends UpdateUserInput_base {
    id: number;
}
export {};
