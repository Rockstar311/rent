import { Injectable } from '@nestjs/common';
import { PropertyRetrieverClient } from '@rent/data-layer-sdk/property/clients/property-retriever.client';
import { RetrievePropertyRequestDto } from '@rent/data-layer-sdk/property/dto/retrieve-property-request.dto';
import { RetrievePropertyResponseDto } from '@rent/data-layer-sdk/property/dto/retrieve-property-response.dto';

@Injectable()
export class PropertyRetrieverService {
  constructor(private propertyRetrieverClient: PropertyRetrieverClient) {}

  public get(
    requestDto: RetrievePropertyRequestDto
  ): Promise<RetrievePropertyResponseDto> {
    return this.propertyRetrieverClient.get(requestDto);
  }
}
