import {
    IsEmail,
  
  } from 'class-validator';
  
  export default class CreateMediaDto {
    @IsEmail()
   media: string;
  }