import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Cathegorie } from 'src/cathegories/schemas/cathegorie.schemas';
import { Media } from 'src/medias/schemas/media.schemas';
import { User } from 'src/users/schemas/user.schemas';
export type ArticleDocument = ArticleSchema & Document;

@Schema()
export class ArticleSchema {
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