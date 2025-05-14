import { Injectable } from '@nestjs/common';
import { Property } from '../entities/property.entity';
import { PropertyDto } from '@rent/data-layer-sdk/property/dto/property.dto';
import { toDto, toDtos } from '@rent/data-layer-sdk/shared/functions/to-dto';

@Injectable()
export class PropertyMapper {
  public toDto(property: Property): PropertyDto {
    return toDto(PropertyDto, property);
  }

  public toDtos(properties: Property[]): PropertyDto[] {
    return toDtos(PropertyDto, properties);
  }
}
