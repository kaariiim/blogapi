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
  import CreateUserDto from './dto/create-user.dto';
  import UpdateUserDto from './dto/update-user.dto';
  import { User } from './schemas/user.schemas';
  import { UserService } from './users.service';
  
  @Controller('user')
  @UseGuards(JwtAuthGuard)
  export class UserController {
    constructor(private readonly userService: UserService) {}
  
    @Get(':id')
    findOne(@Param('id') _id: string) {
      return this.userService.findOne(_id);
    }
  
    @Get()
    findAll() {
      return this.userService.findAll();
    }
  
    @Post()
    create(@Body() createUserDto: CreateUserDto): Promise<User> {
      return this.userService.create(createUserDto);
    }
  
    @Put(':id')
    update(
      @Param('id') id: string,
      @Body() updateUserDto: UpdateUserDto,
    ): Promise<User> {
      return this.userService.update(id, updateUserDto);
    }
  
    @Delete(':id')
    delete(@Param('id') id: string) {
      return this.userService.delete(id);
    }
  }
