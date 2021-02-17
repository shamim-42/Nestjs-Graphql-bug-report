"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserInput = void 0;
const create_user_input_1 = require("./create-user.input");
const swagger_1 = require("@nestjs/swagger");
class UpdateUserInput extends swagger_1.PartialType(create_user_input_1.CreateUserInput) {
}
exports.UpdateUserInput = UpdateUserInput;
//# sourceMappingURL=update-user.input.js.map