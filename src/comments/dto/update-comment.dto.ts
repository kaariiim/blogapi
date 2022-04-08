import {IsOptional, IsMongoId,
    IsString
  } from 'class-validator';
import { User } from 'src/users/schemas/user.schemas';
  
  export default class UpdateCommentDto {
    @IsOptional()
    @IsString()
    comment : string;
    @IsOptional()
    @IsMongoId()
    article: Article ;
    @IsMongoId()
    @IsOptional()
    user : User ;
  
  }