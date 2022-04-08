import {
   
    IsMongoId,
   
    IsString
  } from 'class-validator';
import { User } from 'src/users/schemas/user.schemas';
  
  export default class CreateCommentDto {
    @IsString()
    comment : string;
    @IsMongoId()
    article: Article ;
    @IsMongoId()
    user : User ;
  
  }
