import {
   
    IsOptional,
    IsMongoId,
    IsString
  } from 'class-validator';
import { Cathegorie } from 'src/cathegories/schemas/cathegorie.schemas';
import { Media } from 'src/medias/schemas/media.schemas';
import { User } from 'src/users/schemas/user.schemas';
  
  export default class CreateArticleDto {
    @IsOptional()
    @IsString()
    title : string;
    @IsOptional()
    @IsString()
    content: string;
    @IsOptional()
    publich?: boolean;
    @IsOptional()
    @IsMongoId()
    media : Media ;
    @IsOptional()
    @IsMongoId()
    user : User ;
    @IsOptional()
    @IsMongoId()
    cathegorie:Cathegorie;

  }