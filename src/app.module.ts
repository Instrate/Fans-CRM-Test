import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ControllersModule } from './controllers/controllers.module';
import { DatabaseModule } from './database/database.module';
import { EnvModule } from './services/env/env.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [ControllersModule, DatabaseModule, EnvModule, ServicesModule],
  providers: [AppService],
})
export class AppModule {}
