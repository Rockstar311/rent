import { Module } from '@nestjs/common';
import { PropertyRetrieverController } from './controllers/property-retriever.controller';
import { PropertyRetrieverService } from './services/property-retriever.service';
import { PropertyCdkModule } from '@rent/data-layer-sdk/property/property-cdk.module';
import { PropertyImageUploaderController } from './controllers/property-image-uploader.controller';

@Module({
  imports: [PropertyCdkModule],
  controllers: [
    PropertyRetrieverController,
    PropertyImageUploaderController
  ],
  providers: [PropertyRetrieverService],
})
export class PropertyModule {}
