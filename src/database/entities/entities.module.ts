import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';

const ModuleSet = [UserModule];

@Module({
  imports: ModuleSet,
  exports: ModuleSet
})
export class EntitiesModule {}
