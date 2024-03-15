import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { EntitiesModule } from "../../../database/entities/entities.module";
import { ServicesModule } from "../../../services/services.module";

@Module({
  imports: [EntitiesModule, ServicesModule],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
