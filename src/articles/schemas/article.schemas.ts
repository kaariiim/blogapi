import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document,Types } from 'mongoose';
import { Cathegorie } from 'src/cathegories/schemas/cathegorie.schemas';
import { Media } from 'src/medias/schemas/media.schemas';
import { User } from 'src/users/schemas/user.schemas';
export type ArticleDocument = Article & Document;

@Schema()
export class Article {
  @Prop({ required: true, type: String })
  title: string;
  @Prop({ required: true, type: String })
  content: string;
  @Prop(String)
  publish?: boolean;
  @Prop({ required: true, type: Types.ObjectId , ref: 'Media' })
  media: Media;
  @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
  user: User;
  @Prop({ required: true, type: Types.ObjectId, ref: 'Cathegorie' })
  cathegorie: Cathegorie;
}
export const ArticleSchema = SchemaFactory.createForClass(Article);