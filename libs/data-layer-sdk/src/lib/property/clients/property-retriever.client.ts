import { Injectable } from '@nestjs/common';
import { PropertyRetrieverContract } from '../contracts/property-retriever.contract';
import { PropertyPattern } from '../patterns/property.pattern';
import { DataLayerClient } from '../../shared/clients/data-layer.client';
import { RetrievePropertyQueryDto } from '../dto/retrieve-property-query.dto';
import { RetrievePropertyResponseDto } from '../dto/retrieve-property-response.dto';

@Injectable()
export class PropertyRetrieverClient implements PropertyRetrieverContract {
  constructor(private readonly client: DataLayerClient) {}

  public async get(
    requestDto: RetrievePropertyQueryDto
  ): Promise<RetrievePropertyResponseDto> {
    console.log(requestDto);
    return this.client.send<RetrievePropertyResponseDto>(
      PropertyPattern.GetProperties,
      requestDto
    );
  }
}
