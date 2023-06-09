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
exports.MessagesController = void 0;
const common_1 = require("@nestjs/common");
const messages_service_1 = require("./messages.service");
let MessagesController = exports.MessagesController = class MessagesController {
    constructor(msgService) {
        this.msgService = msgService;
    }
    create(createMsgDto, response) {
        this.msgService
            .create(createMsgDto)
            .then((msg) => {
            response.status(common_1.HttpStatus.CREATED).json(msg);
        })
            .catch(() => response
            .status(common_1.HttpStatus.FORBIDDEN)
            .json({ msg: "error en la creacion" }));
    }
    getAll(response) {
        this.msgService
            .getAll()
            .then((msg) => {
            response.status(common_1.HttpStatus.OK).json(msg);
        })
            .catch(() => response
            .status(common_1.HttpStatus.FORBIDDEN)
            .json({ msg: "error en la obtencion" }));
    }
    update(newMsg, response, id) {
        this.msgService
            .update(id, newMsg)
            .then((msg) => {
            response.status(common_1.HttpStatus.OK).json(msg);
        })
            .catch(() => response
            .status(common_1.HttpStatus.FORBIDDEN)
            .json({ msg: "error en la edicion" }));
    }
    delete(response, id) {
        this.msgService
            .delete(id)
            .then((msg) => {
            response.status(common_1.HttpStatus.OK).json(msg);
        })
            .catch(() => response
            .status(common_1.HttpStatus.FORBIDDEN)
            .json({ msg: "error en la eliminacion" }));
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], MessagesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MessagesController.prototype, "getAll", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], MessagesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], MessagesController.prototype, "delete", null);
exports.MessagesController = MessagesController = __decorate([
    (0, common_1.Controller)("messages"),
    __metadata("design:paramtypes", [messages_service_1.MessagesService])
], MessagesController);
//# sourceMappingURL=messages.controller.js.map