import { DynamicModule, Module } from "@nestjs/common";
import { Type } from "@nestjs/common/interfaces/type.interface";
import { ForwardReference } from "@nestjs/common/interfaces/modules/forward-reference.interface";

const ModuleSet: Array<Type<any> | DynamicModule | Promise<DynamicModule> | ForwardReference> = [
]

@Module({
  imports: ModuleSet,
  exports: ModuleSet
})
export class ServicesModule {}
