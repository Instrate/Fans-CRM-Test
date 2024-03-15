import { IsEmail, IsEnum, IsInt } from "class-validator";

export class SessionInterface {
  @IsEmail()
  email!: string;

  @IsInt()
  exp!: number;

  @IsInt()
  iat!: number;
}

export interface SessionConfigInterface {
  alg: Algorithm;
}
