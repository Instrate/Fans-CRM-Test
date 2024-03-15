import { DynamicModule, Module } from "@nestjs/common";
import { Type } from "@nestjs/common/interfaces/type.interface";
import { ForwardReference } from "@nestjs/common/interfaces/modules/forward-reference.interface";
import { SessionModule } from './session/session.module';
import { CredentialModule } from './credential/credential.module';

const ModuleSet: Array<Type<any> | DynamicModule | Promise<DynamicModule> | ForwardReference> = [
  SessionModule,
  CredentialModule
]

@Module({
  imports: ModuleSet,
  exports: ModuleSet
})
export class ServicesModule {}
