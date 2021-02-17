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
exports.ShopResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const shop_service_1 = require("./shop.service");
const create_shop_input_1 = require("./dto/create-shop.input");
const update_shop_input_1 = require("./dto/update-shop.input");
let ShopResolver = class ShopResolver {
    constructor(shopService) {
        this.shopService = shopService;
    }
    create(createShopInput) {
        return this.shopService.create(createShopInput);
    }
    findAll() {
        return this.shopService.findAll();
    }
    findOne(id) {
        return this.shopService.findOne(id);
    }
    update(updateShopInput) {
        return this.shopService.update(updateShopInput.id, updateShopInput);
    }
    remove(id) {
        return this.shopService.remove(id);
    }
};
__decorate([
    graphql_1.Mutation('createShop'),
    __param(0, graphql_1.Args('createShopInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_shop_input_1.CreateShopInput]),
    __metadata("design:returntype", void 0)
], ShopResolver.prototype, "create", null);
__decorate([
    graphql_1.Query('shop'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ShopResolver.prototype, "findAll", null);
__decorate([
    graphql_1.Query('shop'),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ShopResolver.prototype, "findOne", null);
__decorate([
    graphql_1.Mutation('updateShop'),
    __param(0, graphql_1.Args('updateShopInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_shop_input_1.UpdateShopInput]),
    __metadata("design:returntype", void 0)
], ShopResolver.prototype, "update", null);
__decorate([
    graphql_1.Mutation('removeShop'),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ShopResolver.prototype, "remove", null);
ShopResolver = __decorate([
    graphql_1.Resolver('Shop'),
    __metadata("design:paramtypes", [shop_service_1.ShopService])
], ShopResolver);
exports.ShopResolver = ShopResolver;
//# sourceMappingURL=shop.resolver.js.map