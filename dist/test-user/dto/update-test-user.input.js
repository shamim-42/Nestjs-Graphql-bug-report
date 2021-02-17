"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTestUserInput = void 0;
const create_test_user_input_1 = require("./create-test-user.input");
const graphql_1 = require("@nestjs/graphql");
class UpdateTestUserInput extends graphql_1.PartialType(create_test_user_input_1.CreateTestUserInput) {
}
exports.UpdateTestUserInput = UpdateTestUserInput;
//# sourceMappingURL=update-test-user.input.js.map