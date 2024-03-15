import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity, UserEntityName } from "./user.entity";
import { DatabaseModule } from "../../database.module";
import { SequelizeModule } from "@nestjs/sequelize";

export const userEntityProviders = {
  provide: UserEntityName,
  useValue: UserEntity
};

@Module({
  imports: [
    DatabaseModule,
    SequelizeModule.forFeature([UserEntity])
  ],
  providers: [UserService, userEntityProviders],
  exports: [
    UserService,
    userEntityProviders
  ]
})
export class UserModule {}
