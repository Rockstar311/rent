import { Module } from '@nestjs/common';
import { PropertyRetrieverController } from './controllers/property-retriever.controller';
import { PropertyRetrieverService } from './services/property-retriever.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyMapper } from './mappers/property.mapper';
import { Property } from './entities/property.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Property])],
  controllers: [PropertyRetrieverController],
  providers: [PropertyRetrieverService, PropertyMapper],
})
export class PropertyModule {}
