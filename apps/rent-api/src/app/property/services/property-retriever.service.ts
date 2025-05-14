import { Injectable } from '@nestjs/common';
import { PropertyRetrieverClient } from '@rent/data-layer-sdk/property/clients/property-retriever.client';
import { RetrievePropertyQueryDto } from '@rent/data-layer-sdk/property/dto/retrieve-property-query.dto';
import { RetrievePropertyResponseDto } from '@rent/data-layer-sdk/property/dto/retrieve-property-response.dto';

@Injectable()
export class PropertyRetrieverService {
  constructor(private propertyRetrieverClient: PropertyRetrieverClient) {}

  public get(
    queryDto: RetrievePropertyQueryDto
  ): Promise<RetrievePropertyResponseDto> {
    return this.propertyRetrieverClient.get(queryDto);
  }
}
