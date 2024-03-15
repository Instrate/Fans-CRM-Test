import { Inject, Injectable } from "@nestjs/common";
import { UserEntity, UserEntityName } from "./user.entity";

@Injectable()
export class UserService {

  constructor(
    @Inject(UserEntityName)
    private readonly model: typeof UserEntity
  ) {

  }


  findUserByEmail(email: string){
    return this.model.findOne<UserEntity>({ where: { email }});
  }

  createUser(data: UserEntity){
    return data.save();
  }
}
