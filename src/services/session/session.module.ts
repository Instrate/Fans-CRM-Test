import { Module } from '@nestjs/common';
import { SessionService } from './session.service';
import { JwtStrategy } from "./session.strategy";
import { SessionGuard } from "./session.guard";
import { JwtService } from "@nestjs/jwt";
import { CacheModule } from "@nestjs/cache-manager";

const ModuleSet = [SessionGuard, JwtService, JwtStrategy, SessionService]

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
    })
  ],
  providers: ModuleSet,
  exports: ModuleSet
})
export class SessionModule {}
