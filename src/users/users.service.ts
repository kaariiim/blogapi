import { HttpException, Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schemas';

import { InjectModel } from '@nestjs/mongoose';
import CreateUserDto from './dto/create-user.dto';
import UpdateUserDto from './dto/update-user.dto';
@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel({
      ...createUserDto,
    });
    return createdUser.save();
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise</*UpdateResult*/ any> {
    return this.userModel.updateOne({ _id: id }, updateUserDto);
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async delete(id: string): Promise</*DeleteResult*/ any> {
    return this.userModel.deleteOne({ _id: id });
  }
}