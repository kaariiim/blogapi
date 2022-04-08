import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import CreateCathegorieDto from './dto/creat-cathegorie.dto';
import UpdateCathegorieDto from './dto/update-cathegorie.dto';
import { Cathegorie, CathegorieDocument } from './schemas/cathegorie.schemas';

@Injectable()
export class CathegorieService {
  constructor(
    @InjectModel(Cathegorie.name) private cathegorieModel: Model<CathegorieDocument>,
  ) {}

  async create(createCathegorieDto: CreateCathegorieDto): Promise<Cathegorie> {
    const createdCathegorie = new this.cathegorieModel({
      ...createCathegorieDto,
    });
    return createdCathegorie.save();
  }

  async update(
    id: string,
    updateCathegorieDto: UpdateCathegorieDto,
  ): Promise</*UpdateResult*/ any> {
    return this.cathegorieModel.updateOne({ _id: id }, updateCathegorieDto);
  }

  async findAll(): Promise<Cathegorie[]> {
    return this.cathegorieModel.find().exec();
  }

  async delete(id: string): Promise</*DeleteResult*/ any> {
    return this.cathegorieModel.deleteOne({ _id: id });
  }
}
