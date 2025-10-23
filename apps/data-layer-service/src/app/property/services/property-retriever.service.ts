import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from '../entities/property.entity';
import { Repository } from 'typeorm';
import { PropertyMapper } from '../mappers/property.mapper';
import { paginate } from 'nestjs-typeorm-paginate';
import { RetrievePropertyRequestDto } from '@rent/data-layer-sdk/property/dto/retrieve-property-request.dto';
import { RetrievePropertyResponseDto } from '@rent/data-layer-sdk/property/dto/retrieve-property-response.dto';
import { RetrievePropertyResponseMetaContract } from '@rent/data-layer-sdk/property/contracts/retrieve-property-response-meta.contract';
import { PropertySearchSpecification } from '../specifications/property-search.specification';

@Injectable()
export class PropertyRetrieverService {
  constructor(
    @InjectRepository(Property)
    private propertyRepository: Repository<Property>,
    private propertyMapper: PropertyMapper
  ) {}

  public async get(
    requestDto: RetrievePropertyRequestDto
  ): Promise<RetrievePropertyResponseDto> {
    const specification = new PropertySearchSpecification(requestDto);

    const queryBuilder = specification.toQueryBuilder(
      this.propertyRepository.createQueryBuilder('property')
    );

    const result = await paginate<Property>(queryBuilder, requestDto);

    return new RetrievePropertyResponseDto(
      this.propertyMapper.toDtos(result.items),
      result.meta as RetrievePropertyResponseMetaContract,
      result.links
    );
  }
}
