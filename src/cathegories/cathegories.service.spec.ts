import { Test, TestingModule } from '@nestjs/testing';
import { CathegorieService } from './cathegories.service';

describe('CathegoriesService', () => {
  let service: CathegorieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CathegorieService],
    }).compile();

    service = module.get<CathegorieService>(CathegorieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
