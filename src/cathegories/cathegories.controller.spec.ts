import { Test, TestingModule } from '@nestjs/testing';
import { CathegoriesController } from './cathegories.controller';

describe('CathegoriesController', () => {
  let controller: CathegoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CathegoriesController],
    }).compile();

    controller = module.get<CathegoriesController>(CathegoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
