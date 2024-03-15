import { Body, Controller, Get, HttpException, Param, Post, Req, UseGuards } from "@nestjs/common";
import { Path } from '../../../config/routes';
import { Request } from 'express';
import { DtoUserCreate, DtoUserGet } from "./user.input";
import { UserService } from "./user.service";
import { ClassValidationPipe } from "../../../pipes/class.pipe";
import { SessionGuard } from "../../../services/session/session.guard";

@Controller()
export class UserController {

  constructor(
    private readonly service: UserService,
  ) {
  }

  @Post(Path.api.v1.add_user)
  add_user(@Body(new ClassValidationPipe(DtoUserCreate, true, Path.api.v1.add_user)) body: DtoUserCreate) {
    return this.service.add_user(body);
  }

  // I would like to use query instead of param to easily validate it via existing validation pipe
  @UseGuards(SessionGuard)
  @Get(Path.api.v1.get_user)
  get_user(@Param('id') id: string){
    return this.service.get_user(id);
  }

  @Get(Path.api.v1.login_user)
  login(@Body(new ClassValidationPipe(DtoUserGet, true, Path.api.v1.login_user)) body: DtoUserGet){
    return this.service.login(body);
  }
}
