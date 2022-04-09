import { Test, TestingModule } from '@nestjs/testing';
import { CathegorieController } from './cathegories.controller';

describe('CathegoriesController', () => {
  let controller: CathegorieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CathegorieController],
    }).compile();

    controller = module.get<CathegorieController>(CathegorieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
