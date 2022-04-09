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
import { Cathegorie } from './cathegories.interface';
import { CathegorieService } from './cathegories.service';
import CreateCathegorieDto from './dto/creat-cathegorie.dto';
import UpdateCathegorieDto from './dto/update-cathegorie.dto';

  
  @Controller('cathegorie')
  export class CathegorieController {
    constructor(private readonly cathegorieService: CathegorieService) {}
    @Get()
    findAll() {
      return this.cathegorieService.findAll();
    }
  
    @Post()
    create(@Body() CreateCathegorieDto: CreateCathegorieDto): Promise<any> {
      return this.cathegorieService.create(CreateCathegorieDto);
    }
  
    @Put(':id')
    update(
      @Param('id') id: string,
      @Body() updateCathegorieDto: UpdateCathegorieDto,
    ): Promise<Cathegorie> {
      return this.cathegorieService.update(id, updateCathegorieDto);
    }
  
    @Delete(':id')
    delete(@Param('id') id: string) {
      return this.cathegorieService.delete(id);
    }
  }
  