import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ControllersModule } from './controllers/controllers.module';
import { DatabaseModule } from './database/database.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [ControllersModule, DatabaseModule, ServicesModule],
  providers: [AppService],
})
export class AppModule {}
