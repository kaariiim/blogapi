import {
   
    IsOptional,
    IsMongoId,
    IsString
  } from 'class-validator';
import { Media } from 'src/medias/schemas/media.schemas';
import { User } from 'src/users/schemas/user.schemas';
  
  export default class UpdateCathegorieDto {
    @IsOptional()
    @IsString()
    title : string;
    @IsOptional()
    @IsString()
    description: string;
    @IsOptional()
    publich?: boolean;
    @IsOptional()
    @IsMongoId()
    media : Media ;
    @IsOptional()
    @IsMongoId()
    user : User ;

  }