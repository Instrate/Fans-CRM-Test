import { Module } from '@nestjs/common';
import { EnvModule } from "./env/env.module";

const ModuleSet = [
  EnvModule
]

@Module({
  imports: ModuleSet,
  exports: ModuleSet
})
export class ServicesModule {}
