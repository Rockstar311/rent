import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from '../entities/property.entity';
import { Repository } from 'typeorm';
import { PropertyMapper } from '../mappers/property.mapper';
import { paginate } from 'nestjs-typeorm-paginate';
import { RetrievePropertyQueryDto } from '@rent/data-layer-sdk/property/dto/retrieve-property-query.dto';
import { RetrievePropertyResponseDto } from '@rent/data-layer-sdk/property/dto/retrieve-property-response.dto';

@Injectable()
export class PropertyRetrieverService {
  constructor(
    @InjectRepository(Property)
    private propertyRepository: Repository<Property>,
    private propertyMapper: PropertyMapper
  ) {}

  public async get(
    requestDto: RetrievePropertyQueryDto
  ): Promise<RetrievePropertyResponseDto> {
    const result = await paginate<Property>(
      this.propertyRepository,
      requestDto
    );

    return new RetrievePropertyResponseDto(
      this.propertyMapper.toDtos(result.items),
      result.meta,
      result.links
    );
  }
}
