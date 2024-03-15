import { Module } from '@nestjs/common';
import { EntitiesModule } from './entities/entities.module';
import { ServicesModule } from "../services/services.module";
import { databaseProviders } from "./database.providers";

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders]
})
export class DatabaseModule {}
