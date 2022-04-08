import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { APP_INTERCEPTOR } from '@nestjs/core';
import { CurrentUserInterceptor } from './auth/user.interceptor';
import { CommentsModule } from './comments/comments.module';
import { CathegoriesModule } from './cathegories/cathegories.module';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/blogdb'),
    UserModule,
    MediaModule,
    CommentModule,
    CathegorieModule,
    ArticleModule,
    AuthModule,
    CommentsModule,
    CathegoriesModule,
    ArticlesModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CurrentUserInterceptor,
    },
  ],
})
export class AppModule {}
