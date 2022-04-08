import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from 'src/users/schemas/user.schemas';

export type CommentDocument = Comment & Document;

@Schema()
export class Comment {
  @Prop({ required: true, type: String })
  comment: string;

  @Prop({ required: true, type: String })
  article: Article;


  @Prop({ required: true, type: String })
  user: User;

  
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
