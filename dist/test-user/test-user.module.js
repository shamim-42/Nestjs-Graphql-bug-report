"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestUserModule = void 0;
const common_1 = require("@nestjs/common");
const test_user_service_1 = require("./test-user.service");
const test_user_resolver_1 = require("./test-user.resolver");
let TestUserModule = class TestUserModule {
};
TestUserModule = __decorate([
    common_1.Module({
        providers: [test_user_resolver_1.TestUserResolver, test_user_service_1.TestUserService]
    })
], TestUserModule);
exports.TestUserModule = TestUserModule;
//# sourceMappingURL=test-user.module.js.map