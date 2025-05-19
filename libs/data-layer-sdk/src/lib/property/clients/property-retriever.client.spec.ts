import { Test, TestingModule } from '@nestjs/testing';
import { PropertyRetrieverClient } from './property-retriever.client';
import { DataLayerClient } from '../../shared/clients/data-layer.client';

describe('PropertyRetrieverClient', () => {
  let client: PropertyRetrieverClient;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PropertyRetrieverClient,
        {
          provide: DataLayerClient,
          useValue: {
            send: jest.fn().mockResolvedValue({}),
          },
        },
      ],
    }).compile();

    client = module.get<PropertyRetrieverClient>(PropertyRetrieverClient);
  });

  it('should be defined', () => {
    expect(client).toBeDefined();
  });
});
