import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Message } from "./entities/message.entity";
import { Repository } from "typeorm";
import { CreateMsgDto } from "./dto/create-msg-dto.interface";

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private readonly msgRepository: Repository<Message>
  ) {}

  async getAll() {
    return await this.msgRepository.find();
  }

  async create(msg: CreateMsgDto) {
    const newMsg = new Message();
    newMsg.msg = msg.msg;
    newMsg.nick = msg.nick;

    return this.msgRepository.save(newMsg);
  }

  async update(updatedMsg: CreateMsgDto) {
    const msg = await this.msgRepository.findOne({
      where: { id: updatedMsg.id },
    });

    msg.nick = msg.nick;
    msg.msg = updatedMsg.msg;

    return this.msgRepository.save(msg);
  }

  async delete(id: number) {
    return await this.msgRepository.delete(id);
  }
}
