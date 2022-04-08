import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Media } from 'src/medias/schemas/media.schemas';
import { User } from 'src/users/schemas/user.schemas';
export type CathegorieDocument = Cathegorie & Document;

@Schema()
export class Cathegorie {
  @Prop({ required: true, type: String })
  title: string;
  @Prop({ required: true, type: String })
  description: string;
  @Prop(String)
  publish?: boolean;
  @Prop({ required: true, type: Types.ObjectId , ref: 'Media' })
  media: Media;
  @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
  user: User;
}