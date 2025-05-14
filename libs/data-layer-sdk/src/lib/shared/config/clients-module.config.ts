import { ClientsModule, Transport } from '@nestjs/microservices';

export const CLIENT_MODULE_NAME = 'DATA_LAYER_SERVICE'

export const CLIENT_MODULE_CONFIG = ClientsModule.register([
  {
    name: CLIENT_MODULE_NAME,
    transport: Transport.TCP,
    options: {
      port: +process.env['DATA_LAYER_PORT']! || 3000,
    },
  },
])
