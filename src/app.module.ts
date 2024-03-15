import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ControllersModule } from './controllers/controllers.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ControllersModule, DatabaseModule],
  providers: [AppService],
})
export class AppModule {}
