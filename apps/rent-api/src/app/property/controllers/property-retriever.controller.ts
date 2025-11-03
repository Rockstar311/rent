import { Body, Controller, Post } from '@nestjs/common';
import { PropertyRetrieverService } from '../services/property-retriever.service';
import { RetrievePropertyRequestDto } from '@rent/data-layer-sdk/property/dto/retrieve-property-request.dto';
import { RetrievePropertyResponseDto } from '@rent/data-layer-sdk/property/dto/retrieve-property-response.dto';

@Controller('properties')
export class PropertyRetrieverController {
  constructor(
    private readonly propertyRetrieverService: PropertyRetrieverService
  ) {}

  @Post()
  public find(
    @Body() requestDto: RetrievePropertyRequestDto
  ): Promise<RetrievePropertyResponseDto> {
    return this.propertyRetrieverService.get(requestDto);
  }
}
