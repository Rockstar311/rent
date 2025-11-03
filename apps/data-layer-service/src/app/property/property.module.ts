import { Module } from '@nestjs/common';
import { PropertyRetrieverController } from './controllers/property-retriever.controller';
import { PropertyRetrieverService } from './services/property-retriever.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyMapper } from './mappers/property.mapper';
import { Property } from './entities/property.entity';
import { PropertyImage } from './entities/property-image.entity';
import { PropertyImagesUploaderService } from './services/property-images-uploader.service';
import { PropertyImageUploaderController } from './controllers/property-image-uploader.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Property, PropertyImage])],
  controllers: [PropertyRetrieverController],
  providers: [
    PropertyRetrieverService,
    PropertyMapper,
    PropertyImagesUploaderService,
  ],
})
export class PropertyModule {}
