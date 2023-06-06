import { CreateMsgDto } from "src/messages/dto/create-msg-dto.interface";
export declare class MessagesController {
    create(createMsgDto: CreateMsgDto): string;
    getAll(): string;
    update(newMsg: CreateMsgDto): string;
    delete(): string;
}
