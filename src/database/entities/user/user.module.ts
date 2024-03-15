import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity, UserEntityName } from "./user.entity";

@Module({
  imports: [

  ],
  providers: [UserService, {
    provide: UserEntityName,
    useValue: UserEntity
  }]
})
export class UserModule {}
