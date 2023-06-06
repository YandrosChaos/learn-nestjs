import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from "@nestjs/common";
import { CreateMsgDto } from "src/messages/dto/create-msg-dto.interface";
import { MessagesService } from "./messages.service";

@Controller("messages")
export class MessagesController {
  constructor(private msgService: MessagesService) {}

  @Post()
  create(@Body() createMsgDto: CreateMsgDto, @Res() response) {
    this.msgService
      .create(createMsgDto)
      .then((msg) => {
        response.status(HttpStatus.CREATED).json(msg);
      })
      .catch(() =>
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ msg: "error en la creacion" })
      );
  }

  @Get()
  getAll(@Res() response) {
    this.msgService
      .getAll()
      .then((msg) => {
        response.status(HttpStatus.OK).json(msg);
      })
      .catch(() =>
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ msg: "error en la obtencion" })
      );
  }

  @Put(":id")
  update(@Body() newMsg: CreateMsgDto, @Res() response, @Param("id") id) {
    this.msgService
      .update(id, newMsg)
      .then((msg) => {
        response.status(HttpStatus.OK).json(msg);
      })
      .catch(() =>
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ msg: "error en la edicion" })
      );
  }

  @Delete(":id")
  delete(@Res() response, @Param("id") id) {
    this.msgService
      .delete(id)
      .then((msg) => {
        response.status(HttpStatus.OK).json(msg);
      })
      .catch(() =>
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ msg: "error en la eliminacion" })
      );
  }
}
