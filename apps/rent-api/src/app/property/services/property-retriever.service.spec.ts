import { Test, TestingModule } from '@nestjs/testing';
import { PropertyRetrieverService } from './property-retriever.service';
import { PropertyRetrieverClient } from '@rent/data-layer-sdk/property/clients/property-retriever.client';

describe('PropertyRetrieverService', () => {
  let service: PropertyRetrieverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PropertyRetrieverService,
        {
          provide: PropertyRetrieverClient,
          useValue: {
            get: jest.fn().mockResolvedValue({}),
          },
        }
      ],
    }).compile();

    service = module.get<PropertyRetrieverService>(PropertyRetrieverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
