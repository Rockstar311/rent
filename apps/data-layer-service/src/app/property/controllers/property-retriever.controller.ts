import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { PropertyRetrieverService } from '../services/property-retriever.service';
import { PropertyRetrieverContract } from '@rent/data-layer-sdk/property/contracts/property-retriever.contract';
import { PropertyPattern } from '@rent/data-layer-sdk/property/patterns/property.pattern';
import { RetrievePropertyQueryDto } from '@rent/data-layer-sdk/property/dto/retrieve-property-query.dto';
import { RetrievePropertyResponseDto } from '@rent/data-layer-sdk/property/dto/retrieve-property-response.dto';

@Controller()
export class PropertyRetrieverController implements PropertyRetrieverContract {
  constructor(
    private readonly propertyRetrieverService: PropertyRetrieverService
  ) {}

  @MessagePattern(PropertyPattern.GetProperties)
  public get(
    queryDto: RetrievePropertyQueryDto
  ): Promise<RetrievePropertyResponseDto> {
    return this.propertyRetrieverService.get(queryDto);
  }
}
