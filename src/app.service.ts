import { Injectable } from '@nestjs/common';
import { EnvSchema } from "./config/env.input";
import { EnvService } from "./services/env/env.service";

@Injectable()
export class AppService {
  public readonly env: EnvSchema;

  static Ref: AppService;

  constructor() {
    this.env = new EnvService(EnvSchema).properties;
    AppService.Ref ??= this;
  }

}
