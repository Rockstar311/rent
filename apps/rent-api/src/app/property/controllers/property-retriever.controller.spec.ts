import { Test, TestingModule } from '@nestjs/testing';
import { PropertyRetrieverController } from './property-retriever.controller';
import { PropertyRetrieverService } from '../services/property-retriever.service';

describe('PropertyRetrieverController', () => {
  let controller: PropertyRetrieverController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: PropertyRetrieverService,
          useValue: {
            get: jest.fn().mockResolvedValue({}),
          },
        }
      ],
      controllers: [PropertyRetrieverController],
    }).compile();

    controller = module.get<PropertyRetrieverController>(
      PropertyRetrieverController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
