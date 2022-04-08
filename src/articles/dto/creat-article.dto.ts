import {
   
    IsOptional,
    IsMongoId,
    IsString
  } from 'class-validator';
import { Cathegorie } from 'src/cathegories/schemas/cathegorie.schemas';
import { Media } from 'src/medias/schemas/media.schemas';
import { User } from 'src/users/schemas/user.schemas';
  
  export default class CreateArticleDto {
    @IsString()
    title : string;
    @IsString()
    content: string;
    @IsOptional()
    publich?: boolean;
    @IsMongoId()
    media : Media ;
    @IsMongoId()
    user : User ;
    @IsMongoId()
    cathegorie:Cathegorie;

  }