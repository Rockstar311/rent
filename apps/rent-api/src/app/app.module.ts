import { Module } from '@nestjs/common';
import { PropertyModule } from './property/property.module';
import { DataLayerSdkModule } from '@rent/data-layer-sdk/data-layer-sdk.module';

@Module({
  imports: [DataLayerSdkModule, PropertyModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
