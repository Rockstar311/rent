import { Test, TestingModule } from '@nestjs/testing';
import { PropertyImagesUploaderService } from './property-images-uploader.service';

describe('PropertyImagesUploaderService', () => {
  let service: PropertyImagesUploaderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PropertyImagesUploaderService],
    }).compile();

    service = module.get<PropertyImagesUploaderService>(
      PropertyImagesUploaderService
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
