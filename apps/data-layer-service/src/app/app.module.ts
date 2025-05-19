import { Module } from '@nestjs/common';
import { PropertyModule } from './property/property.module';
import { TYPE_ORM_CONFIG } from './shared/config/type-orm.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TYPE_ORM_CONFIG,
    PropertyModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
