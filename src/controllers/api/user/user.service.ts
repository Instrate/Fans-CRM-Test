import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { DtoUserCreate, DtoUserGet } from "./user.input";
import { UserService as UserEntityService } from "../../../database/entities/user/user.service";
import { ApiResponseMessage } from "../../../config/response";
import { UserEntity } from "../../../database/entities/user/user.entity";
import { Entity } from "../../../database/entities/entities.type";
import { ConflictLoginException } from "../../../config/error";
import { SessionService } from "../../../services/session/session.service";

@Injectable()
export class UserService {

  constructor(
    private readonly userEntityService: UserEntityService,
    private readonly sessionService: SessionService,
  ) {
  }
  async add_user(data: DtoUserCreate) {
    try{
      const res = await this.userEntityService.createUser(data as Entity<UserEntity>);
      console.log(res.toJSON());
    }
    catch{
      throw new BadRequestException({ message: ApiResponseMessage.user.creationError });
    }
    return { message: ApiResponseMessage.user.creationSuccess};
  }


  async get_user(id: string){
    const res = await this.userEntityService.findUserById(id);
    if(!res){
      throw new NotFoundException({ message: ApiResponseMessage.user.notFoundError});
    }
    return { data: res.toJSON() };
  }

  async login(data: DtoUserGet){
    const found = await this.userEntityService.findUserWithPassword(data.email, data.password);
    if(!found){
      throw ConflictLoginException;
    }
    const session = SessionService.create({ email: data.email});

    await this.sessionService.sessionUpdate(data.email, session);

    return { data: session };
  }
}
