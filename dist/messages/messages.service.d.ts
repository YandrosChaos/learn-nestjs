import { Message } from "./entities/message.entity";
import { Repository } from "typeorm";
import { CreateMsgDto } from "./dto/create-msg-dto.interface";
export declare class MessagesService {
    private readonly msgRepository;
    constructor(msgRepository: Repository<Message>);
    getAll(): Promise<Message[]>;
    create(msg: CreateMsgDto): Promise<Message>;
    update(id: number, updatedMsg: CreateMsgDto): Promise<Message>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
