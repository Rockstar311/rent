import { RetrievePropertyRequestDto } from '@rent/data-layer-sdk/property/dto/retrieve-property-request.dto';
import { SelectQueryBuilder } from 'typeorm/query-builder/SelectQueryBuilder';
import { Property } from '../entities/property.entity';

export class PropertySearchSpecification {
  constructor(private readonly requestDto: RetrievePropertyRequestDto) {}

  public toQueryBuilder(
    query: SelectQueryBuilder<Property>
  ): SelectQueryBuilder<Property> {
    this.addFilters(query);

    return query;
  }

  private addFilters(query: SelectQueryBuilder<Property>): void {
    const { filters } = this.requestDto;

    if (!filters) return;

    if (filters.minPrice) {
      query.andWhere('property.price >= :minPrice', {
        minPrice: filters.minPrice,
      });
    }

    if (filters.maxPrice) {
      query.andWhere('property.price <= :maxPrice', {
        maxPrice: filters.maxPrice,
      });
    }

    if (filters.minCreatedAt) {
      query.andWhere('property.createdAt >= :minCreatedAt', {
        minCreatedAt: filters.minCreatedAt,
      });
    }

    if (filters.maxCreatedAt) {
      query.andWhere('property.createdAt <= :maxCreatedAt', {
        maxCreatedAt: filters.maxCreatedAt,
      });
    }
  }
}
