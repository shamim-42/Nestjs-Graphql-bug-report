"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserInput = exports.CreateUserInputType = void 0;
const graphql_1 = require("@nestjs/graphql");
class CreateUserInputType {
}
exports.CreateUserInputType = CreateUserInputType;
class UpdateUserInput extends graphql_1.PartialType(CreateUserInputType) {
}
exports.UpdateUserInput = UpdateUserInput;
//# sourceMappingURL=user.dto.js.map