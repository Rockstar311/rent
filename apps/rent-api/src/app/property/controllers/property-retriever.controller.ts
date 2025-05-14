import { Controller, Get, Query } from '@nestjs/common';
import { PropertyRetrieverService } from '../services/property-retriever.service';
import { RetrievePropertyQueryDto } from '@rent/data-layer-sdk/property/dto/retrieve-property-query.dto';
import { RetrievePropertyResponseDto } from '@rent/data-layer-sdk/property/dto/retrieve-property-response.dto';

@Controller('properties')
export class PropertyRetrieverController {
  constructor(
    private readonly propertyRetrieverService: PropertyRetrieverService
  ) {}

  @Get()
  public find(
    @Query() queryDto: RetrievePropertyQueryDto
  ): Promise<RetrievePropertyResponseDto> {
    return this.propertyRetrieverService.get(queryDto);
  }
}
