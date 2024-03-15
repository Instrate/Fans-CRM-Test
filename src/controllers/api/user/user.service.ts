import { Injectable } from '@nestjs/common';
import { DtoUserCreate } from "./user.input";

@Injectable()
export class UserService {
  async add_user(data: DtoUserCreate) {
    return { message: data };
  }
}
