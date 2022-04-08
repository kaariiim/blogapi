import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query,
  } from '@nestjs/common';
import { Article } from './articles.interface';
import { ArticleService } from './articles.service';
import CreateArticleDto from './dto/creat-article.dto';
import UpdateArticleDto from './dto/update-article.dto';

  
  @Controller('article')
  export class ArticleController {
    constructor(private readonly articleService: ArticleService) {}
    @Get()
    findAll() {
      return this.articleService.findAll();
    }
  
    @Post()
    create(@Body() createArticleDto: CreateArticleDto): Promise<Article> {
      return this.articleService.create(createArticleDto);
    }
  
    @Put(':id')
    update(
      @Param('id') id: string,
      @Body() updateArticleDto: UpdateArticleDto,
    ): Promise<Article> {
      return this.articleService.update(id, updateArticleDto);
    }
  
    @Delete(':id')
    delete(@Param('id') id: string) {
      return this.articleService.delete(id);
    }
  }
  