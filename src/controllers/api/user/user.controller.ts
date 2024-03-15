import { Body, Controller, Get, HttpException, Post, Req } from "@nestjs/common";
import { Path } from '../../../config/routes';
import { Request } from 'express';
import { DtoUserCreate } from "./user.input";
import { UserService } from "./user.service";
import { ClassValidationPipe } from "../../../pipes/class.pipe";

@Controller()
export class UserController {

  constructor(private readonly service: UserService) {
  }

  @Post(Path.api.v1.add_user)
  add_user(@Body(new ClassValidationPipe(DtoUserCreate, true, Path.api.v1.add_user)) body: DtoUserCreate) {
    return this.service.add_user(body);
  }

  @Get(Path.api.v1.get_user)
  get_user(@Req() req: Request){

    return null;
  }
}
