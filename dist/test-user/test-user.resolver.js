"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestUserResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const test_user_service_1 = require("./test-user.service");
const create_test_user_input_1 = require("./dto/create-test-user.input");
const update_test_user_input_1 = require("./dto/update-test-user.input");
let TestUserResolver = class TestUserResolver {
    constructor(testUserService) {
        this.testUserService = testUserService;
    }
    create(createTestUserInput) {
        return this.testUserService.create(createTestUserInput);
    }
    findAll() {
        return this.testUserService.findAll();
    }
    findOne(id) {
        return this.testUserService.findOne(id);
    }
    update(updateTestUserInput) {
        return this.testUserService.update(updateTestUserInput.id, updateTestUserInput);
    }
    remove(id) {
        return this.testUserService.remove(id);
    }
};
__decorate([
    graphql_1.Mutation('createTestUser'),
    __param(0, graphql_1.Args('createTestUserInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_test_user_input_1.CreateTestUserInput]),
    __metadata("design:returntype", void 0)
], TestUserResolver.prototype, "create", null);
__decorate([
    graphql_1.Query('testUser'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TestUserResolver.prototype, "findAll", null);
__decorate([
    graphql_1.Query('testUser'),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TestUserResolver.prototype, "findOne", null);
__decorate([
    graphql_1.Mutation('updateTestUser'),
    __param(0, graphql_1.Args('updateTestUserInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_test_user_input_1.UpdateTestUserInput]),
    __metadata("design:returntype", void 0)
], TestUserResolver.prototype, "update", null);
__decorate([
    graphql_1.Mutation('removeTestUser'),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TestUserResolver.prototype, "remove", null);
TestUserResolver = __decorate([
    graphql_1.Resolver('TestUser'),
    __metadata("design:paramtypes", [test_user_service_1.TestUserService])
], TestUserResolver);
exports.TestUserResolver = TestUserResolver;
//# sourceMappingURL=test-user.resolver.js.map