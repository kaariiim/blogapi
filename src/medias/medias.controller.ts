import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UseGuards,
  } from '@nestjs/common';
  import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
  import CreateMediaDto from './dto/create-media.dto';
  import UpdateMediaDto from './dto/update-media.dto';
  import { Media } from './schemas/media.schemas';
  import { MediaService } from './medias.service';
  
  @Controller('media')
  @UseGuards(JwtAuthGuard)
  export class MediaController {
    constructor(private readonly mediaService: MediaService) {}
  
    @Get(':id')
    findOne(@Param('id') _id: string) {
      return this.mediaService.findOne(_id);
    }
  
    @Get()
    findAll() {
      return this.mediaService.findAll();
    }
  
    @Post()
    create(@Body() createMediaDto: CreateMediaDto): Promise<Media> {
      return this.mediaService.create(createMediaDto);
    }
  
    @Put(':id')
    update(
      @Param('id') id: string,
      @Body() updateMediaDto: UpdateMediaDto,
    ): Promise<Media> {
      return this.mediaService.update(id, updateMediaDto);
    }
  
    @Delete(':id')
    delete(@Param('id') id: string) {
      return this.mediaService.delete(id);
    }
  }
