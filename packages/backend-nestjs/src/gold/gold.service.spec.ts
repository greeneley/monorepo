import { Test, TestingModule } from '@nestjs/testing';
import { GoldService } from './gold.service';

describe('GoldService', () => {
  let service: GoldService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GoldService]
    }).compile();

    service = module.get<GoldService>(GoldService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
