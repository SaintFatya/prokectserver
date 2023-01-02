"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_config_1 = require("./config/typeorm.config");
const user_module_1 = require("./user/user.module");
const coins_module_1 = require("./coins/coins.module");
const catedories_module_1 = require("./catedories/catedories.module");
const serve_static_1 = require("@nestjs/serve-static");
const file_module_1 = require("./file/file.module");
const auth_module_1 = require("./auth/auth.module");
const app_root_path_1 = require("app-root-path");
const cart_module_1 = require("./cart/cart.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: typeorm_config_1.getTypeOrmConfig,
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: `${app_root_path_1.path}/uploads`,
                serveRoot: '/uploads',
            }),
            user_module_1.UserModule,
            coins_module_1.CoinsModule,
            catedories_module_1.CategoriesModule,
            file_module_1.FileModule,
            auth_module_1.AuthModule,
            cart_module_1.CartModule,
        ],
        controllers: [],
        providers: [],
        exports: [config_1.ConfigModule],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map