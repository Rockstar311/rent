import { Test, TestingModule } from '@nestjs/testing';
import { PropertyImageUploaderController } from './property-image-uploader.controller';

describe('PropertyImageUploaderController', () => {
  let controller: PropertyImageUploaderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PropertyImageUploaderController],
    }).compile();

    controller = module.get<PropertyImageUploaderController>(
      PropertyImageUploaderController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
