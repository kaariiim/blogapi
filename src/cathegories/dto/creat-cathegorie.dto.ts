import {
   
    IsOptional,
    IsMongoId,
    IsString
  } from 'class-validator';
import { Media } from 'src/medias/schemas/media.schemas';
import { User } from 'src/users/schemas/user.schemas';
  
  export default class CreateCathegorieDto {
    @IsString()
    title : string;
    @IsString()
    description: string;
    @IsOptional()
    publich?: boolean;
    @IsMongoId()
    media : Media ;
    @IsMongoId()
    user : User ;

  }

  
  
