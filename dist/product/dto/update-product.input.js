"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductInput = void 0;
const create_product_input_1 = require("./create-product.input");
const swagger_1 = require("@nestjs/swagger");
class UpdateProductInput extends swagger_1.PartialType(create_product_input_1.CreateProductInput) {
}
exports.UpdateProductInput = UpdateProductInput;
//# sourceMappingURL=update-product.input.js.map