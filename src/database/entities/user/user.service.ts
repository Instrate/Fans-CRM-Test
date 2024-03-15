import { Inject, Injectable } from "@nestjs/common";
import { UserEntity, UserEntityName } from "./user.entity";
import { Entity } from "../entities.type";

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

  findUserWithPassword(email: string, password: string){
    return this.findUserByEmail(email).then((val) => val?.validatePassword(password));
  }

  findUserById(id: string){
    return this.model.findByPk(id);
  }

  createUser(data: Entity<UserEntity>){
    return this.model.create<UserEntity>(data);
  }
}
