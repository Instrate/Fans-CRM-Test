import { IsNotEmpty, IsNumberString, IsString, Matches } from "class-validator";

export class EnvSchema {

  @IsNotEmpty()
  @IsString()
  DATABASE_HOST!: string;

  @Matches(/^([1-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/)
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


}