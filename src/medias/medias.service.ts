import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import CreateMediaDto from './dto/create-media.dto';
import UpdateMediaDto from './dto/update-media.dto';
import { Media, MediaDocument } from './schemas/media.schemas';
@Injectable()
export class MediaService {
  constructor(
    @InjectModel(Media.name) private mediaModel: Model<MediaDocument>,
  ) {}

  async create(createMediaDto: CreateMediaDto): Promise<Media> {
    const createdMedia = new this.mediaModel({
      ...createMediaDto,
    });
    return createdMedia.save();
  }

  async update(
    id: string,
    updateMediaDto: UpdateMediaDto,
  ): Promise</*UpdateResult*/ any> {
    return this.mediaModel.updateOne({ _id: id }, updateMediaDto);
  }

  async findAll(): Promise<Media[]> {
    return this.mediaModel.find().exec();
  }

  async delete(id: string): Promise</*DeleteResult*/ any> {
    return this.mediaModel.deleteOne({ _id: id });
  }
}
