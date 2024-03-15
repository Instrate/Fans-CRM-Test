import { IsEmail, IsPhoneNumber, IsString, Matches } from "class-validator";


export class DtoUserGet {
  @IsEmail()
  email!: string;

  @Matches(/^([\s\S]{8,40})$/gs)
  @IsString()
  password!: string;
}


export class DtoUserCreate extends DtoUserGet{
  @Matches(/^([A-Z][a-z]{1,15})+(?: ([A-Z][a-z]{1,15}){1,15})?$/gs)
  @IsString()
  full_name!: string;

  @IsPhoneNumber()
  phone!: string;
}