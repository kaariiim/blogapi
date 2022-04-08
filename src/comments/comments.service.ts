import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import CreateCommentDto from './dto/create-comment.dto';
import UpdateCommentDto from './dto/update-comment.dto';
import { Comment, CommentDocument } from './schemas/comment.schemas';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
  ) {}

  async create(createCommentDto: CreateCommentDto): Promise<Comment> {
    const createdComment = new this.commentModel({
      ...createCommentDto,
    });
    return createdComment.save();
  }

  async update(
    id: string,
    updateCommentDto: UpdateCommentDto,
  ): Promise</*UpdateResult*/ any> {
    return this.commentModel.updateOne({ _id: id }, updateCommentDto);
  }

  async findAll(): Promise<Comment[]> {
    return this.commentModel.find().exec();
  }

  async delete(id: string): Promise</*DeleteResult*/ any> {
    return this.commentModel.deleteOne({ _id: id });
  }
}
