import { IsNotEmpty, IsNumberString, IsString, Matches } from "class-validator";
import { PortRegexp } from "./env.constants";

export class EnvSchema {

  @IsNotEmpty()
  @IsString()
  DATABASE_HOST!: string;

  @Matches(PortRegexp)
  @IsNumberString({ no_symbols: true })
  DATABASE_PORT: string;

  @IsNotEmpty()
  @IsString()
  DATABASE_USERNAME!: string;

  @IsNotEmpty()
  @IsString()
  DATABASE_PASSWORD!: string;

  @IsNotEmpty()
  @IsString()
  DATABASE_NAME!: string;

  @Matches(PortRegexp)
  @IsNumberString({ no_symbols: true })
  APPLICATION_PORT!: string;

}