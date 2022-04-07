import { Test, TestingModule } from '@nestjs/testing';
import { CathegoriesService } from './cathegories.service';

describe('CathegoriesService', () => {
  let service: CathegoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CathegoriesService],
    }).compile();

    service = module.get<CathegoriesService>(CathegoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
