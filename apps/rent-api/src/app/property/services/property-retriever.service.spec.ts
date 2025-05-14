import { Test, TestingModule } from '@nestjs/testing';
import { PropertyRetrieverService } from './property-retriever.service';

describe('PropertyRetrieverService', () => {
  let service: PropertyRetrieverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PropertyRetrieverService],
    }).compile();

    service = module.get<PropertyRetrieverService>(PropertyRetrieverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
