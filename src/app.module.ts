import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentModule } from './comments/comments.module';
import { CathegorieModule } from './cathegories/cathegories.module';
import { ArticleModule } from './articles/articles.module';
import { MediaModule } from './medias/medias.module';
import { UserModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/blogdb'),
    UserModule,
    MediaModule,
    CommentModule,
    CathegorieModule,
    ArticleModule,
    CommentModule,
    CathegorieModule,
    ArticleModule,
    MediaModule,
  ],
})
export class AppModule {}
