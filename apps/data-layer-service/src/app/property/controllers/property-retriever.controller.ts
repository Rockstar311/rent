import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { PropertyRetrieverService } from '../services/property-retriever.service';
import { PropertyRetrieverContract } from '@rent/data-layer-sdk/property/contracts/property-retriever.contract';
import { PropertyPattern } from '@rent/data-layer-sdk/property/patterns/property.pattern';
import { RetrievePropertyRequestDto } from '@rent/data-layer-sdk/property/dto/retrieve-property-request.dto';
import { RetrievePropertyResponseDto } from '@rent/data-layer-sdk/property/dto/retrieve-property-response.dto';

@Controller()
export class PropertyRetrieverController implements PropertyRetrieverContract {
  constructor(
    private readonly propertyRetrieverService: PropertyRetrieverService
  ) {}

  @MessagePattern(PropertyPattern.GetProperties)
  public get(
    requestDto: RetrievePropertyRequestDto
  ): Promise<RetrievePropertyResponseDto> {
    return this.propertyRetrieverService.get(requestDto);
  }
}
