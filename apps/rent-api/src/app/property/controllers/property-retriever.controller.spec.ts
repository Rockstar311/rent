import { Test, TestingModule } from '@nestjs/testing';
import { PropertyRetrieverController } from './property-retriever.controller';

describe('PropertyRetrieverController', () => {
  let controller: PropertyRetrieverController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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
