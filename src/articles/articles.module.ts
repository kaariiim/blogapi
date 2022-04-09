import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {  ArticleSchema } from './schemas/article.schemas';
import { ArticleController } from './articles.controller';
import { ArticleService } from './articles.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Article', schema: ArticleSchema }])],
  controllers: [ArticleController],
  providers: [ArticleService],
  exports: [ArticleService],
})
export class ArticleModule {}
