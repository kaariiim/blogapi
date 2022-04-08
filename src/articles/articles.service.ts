import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import CreateArticleDto from './dto/creat-article.dto';
import UpdateArticleDto from './dto/update-article.dto';
import { Article, ArticleDocument } from './schemas/article.schemas';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(Article.name) private articleModel: Model<ArticleDocument>,
  ) {}

  async create(createArticleDto: CreateArticleDto): Promise<Article> {
    const createdArticle = new this.articleModel({
      ...createArticleDto,
    });
    return createdArticle.save();
  }

  async update(
    id: string,
    updateArticleDto: UpdateArticleDto,
  ): Promise</*UpdateResult*/ any> {
    return this.articleModel.updateOne({ _id: id }, updateArticleDto);
  }

  async findAll(): Promise<Article[]> {
    return this.articleModel.find().exec();
  }

  async delete(id: string): Promise</*DeleteResult*/ any> {
    return this.articleModel.deleteOne({ _id: id });
  }
}
