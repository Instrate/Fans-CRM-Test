import { Module } from '@nestjs/common';
import { EntitiesModule } from './entities/entities.module';
import { ServicesModule } from "../services/services.module";

@Module({
  imports: [EntitiesModule, ServicesModule]
})
export class DatabaseModule {}
