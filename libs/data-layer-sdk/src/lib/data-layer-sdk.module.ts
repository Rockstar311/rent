import { Module } from '@nestjs/common';
import { PropertyCdkModule } from './property/property-cdk.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [PropertyCdkModule, SharedModule],
  controllers: [],
  providers: [],
  exports: [PropertyCdkModule],
})
export class DataLayerSdkModule {}
