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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shop = void 0;
const typeorm_1 = require("typeorm");
const product_entity_1 = require("../../product/entities/product.entity");
const user_entity_1 = require("../../user/entities/user.entity");
let Shop = class Shop {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Shop.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 128 }),
    __metadata("design:type", String)
], Shop.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ length: 1028, nullable: true }),
    __metadata("design:type", String)
], Shop.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ length: 1028, nullable: true }),
    __metadata("design:type", String)
], Shop.prototype, "logo", void 0);
__decorate([
    typeorm_1.Column({
        length: 1028,
        nullable: true,
    }),
    __metadata("design:type", String)
], Shop.prototype, "banner", void 0);
__decorate([
    typeorm_1.OneToMany((type) => product_entity_1.Product, product => product.shop),
    __metadata("design:type", Array)
], Shop.prototype, "products", void 0);
__decorate([
    typeorm_1.ManyToMany(type => user_entity_1.User, user => {
        return (user.shops,
            { cascade: true });
    }),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Shop.prototype, "members", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.User),
    typeorm_1.JoinColumn(),
    __metadata("design:type", user_entity_1.User)
], Shop.prototype, "created_by", void 0);
Shop = __decorate([
    typeorm_1.Entity()
], Shop);
exports.Shop = Shop;
//# sourceMappingURL=shop.entity.js.map