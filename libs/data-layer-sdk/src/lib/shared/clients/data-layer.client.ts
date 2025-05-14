import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CLIENT_MODULE_NAME } from '../config/clients-module.config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class DataLayerClient {
  constructor(@Inject(CLIENT_MODULE_NAME) private client: ClientProxy) {}

  public async send<T>(pattern: string, data: unknown): Promise<T> {
    return await firstValueFrom(this.client.send<T>(pattern, data));
  }
}
