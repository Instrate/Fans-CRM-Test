import { Module } from '@nestjs/common';
import { ControllersService } from './controllers.service';
import { ApiModule } from './api/api.module';

@Module({
  providers: [ControllersService],
  imports: [ApiModule]
})
export class ControllersModule {}
