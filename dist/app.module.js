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
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const messages_controller_1 = require("./messages/messages.controller");
const typeorm_1 = require("@nestjs/typeorm");
const messages_service_1 = require("./messages/messages.service");
const message_entity_1 = require("./messages/entities/message.entity");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: "mysql",
                host: "localhost",
                port: 3306,
                username: "nest",
                password: "nest",
                database: "sendmeapp_db",
                entities: [__dirname + "/**/*.entity{.ts,.js}"],
                synchronize: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([message_entity_1.Message]),
        ],
        controllers: [app_controller_1.AppController, messages_controller_1.MessagesController],
        providers: [app_service_1.AppService, messages_service_1.MessagesService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map