import { Module } from '@nestjs/common';
import { PropertyModule } from './property/property.module';
import { DataLayerSdkModule } from '@rent/data-layer-sdk/data-layer-sdk.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DataLayerSdkModule,
    PropertyModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
