import {
    IsEmail,
    IsOptional,
    IsUrl,
    Length,
    IsString
  } from 'class-validator';
  
  export default class CreateUserDto {
    @IsEmail()
    email: string;
    password: string;
    @Length(2, 25)
    @IsString()
    firstName: string;
    @IsString()
    @Length(2, 25)
    lastName: string;
    @IsOptional()
    publich?: boolean;
    @IsOptional()
    @IsUrl()
    avatar?: string;
  }
