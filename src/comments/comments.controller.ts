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
  
  
  import { CommentService } from './comments.service';
import CreateCommentDto from './dto/create-comment.dto';
import UpdateCommentDto from './dto/update-comment.dto';
  
  @Controller('comment')
  export class CommentController {
    constructor(private readonly commentService: CommentService) {}
    @Get()
    findAll() {
      return this.commentService.findAll();
    }
  
    @Post()
    create(@Body() createCommentDto: CreateCommentDto): Promise<Comment> {
      return this.commentService.create(createCommentDto);
    }
  
    @Put(':id')
    update(
      @Param('id') id: string,
      @Body() updateCommentDto: UpdateCommentDto,
    ): Promise<Comment> {
      return this.commentService.update(id, updateCommentDto);
    }
  
    @Delete(':id')
    delete(@Param('id') id: string) {
      return this.commentService.delete(id);
    }
  }
  