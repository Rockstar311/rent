import { Module } from '@nestjs/common';
import { PropertyRetrieverClient } from './clients/property-retriever.client';
import { SharedModule } from '../shared/shared.module';

@Module({
  imports: [SharedModule],
  controllers: [],
  providers: [PropertyRetrieverClient],
  exports: [PropertyRetrieverClient],
})
export class PropertyCdkModule {}
