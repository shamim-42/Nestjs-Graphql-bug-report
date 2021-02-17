"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateShopInput = void 0;
const create_shop_input_1 = require("./create-shop.input");
const graphql_1 = require("@nestjs/graphql");
class UpdateShopInput extends graphql_1.PartialType(create_shop_input_1.CreateShopInput) {
}
exports.UpdateShopInput = UpdateShopInput;
//# sourceMappingURL=update-shop.input.js.map