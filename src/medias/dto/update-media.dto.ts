import {
    IsEmail,IsOptional 
  
  } from 'class-validator';
  
  export default class UpdateMediaDto {
    @IsOptional()
    @IsEmail()
   media: string;
  }