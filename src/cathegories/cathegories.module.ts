import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CathegorieSchema } from './schemas/cathegorie.schemas';
import { CathegorieController } from './cathegories.controller';
import { CathegorieService } from './cathegories.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Cathegorie', schema: CathegorieSchema }])],
  controllers: [CathegorieController],
  providers: [CathegorieService],
  exports: [CathegorieService],
})
export class CathegorieModule {}
