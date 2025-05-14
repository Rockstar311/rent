import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { CLIENT_MODULE_CONFIG } from '../shared/config/clients-module.config';
import { DataLayerClient } from './clients/data-layer.client';

@Module({
  imports: [CLIENT_MODULE_CONFIG],
  providers: [DataLayerClient],
  exports: [ClientsModule, DataLayerClient],
})
export class SharedModule {}
