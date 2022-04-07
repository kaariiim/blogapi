import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { MediasController } from './medias/medias.controller';
import { CommentsController } from './comments/comments.controller';
import { CathegoriesController } from './cathegories/cathegories.controller';
import { ArticlesController } from './articles/articles.controller';
import { UsersService } from './users/users.service';
import { MediasService } from './medias/medias.service';
import { CommentsService } from './comments/comments.service';
import { CathegoriesService } from './cathegories/cathegories.service';
import { ArticlesService } from './articles/articles.service';

@Module({
  imports: [],
  controllers: [AppController, UsersController, MediasController, CommentsController, CathegoriesController, ArticlesController],
  providers: [AppService, UsersService, MediasService, CommentsService, CathegoriesService, ArticlesService],
})
export class AppModule {}
