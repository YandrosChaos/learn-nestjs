import { CreateMsgDto } from "src/messages/dto/create-msg-dto.interface";
import { MessagesService } from "./messages.service";
export declare class MessagesController {
    private msgService;
    constructor(msgService: MessagesService);
    create(createMsgDto: CreateMsgDto, response: any): void;
    getAll(response: any): void;
    update(newMsg: CreateMsgDto, response: any, id: any): void;
    delete(response: any, id: any): void;
}
