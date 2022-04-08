import {
    IsEmail,
    IsOptional,
    IsUrl,
    Length,
    IsString
  } from 'class-validator';
  
  export default class UpdateUserDto {
    @IsOptional()
    @IsEmail()
    email: string;
    @IsOptional()
    password: string;
    @IsOptional()
    @Length(2, 25)
    @IsString()
    firstName: string;
    @IsOptional()
    @Length(2, 25)
    lastName: string;
    @IsOptional()
    publich?: boolean;
    @IsOptional()
    @IsUrl()
    avatar?: string;
  }
