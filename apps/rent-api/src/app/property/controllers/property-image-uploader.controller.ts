import { Controller, Param, Post, UploadedFiles } from '@nestjs/common';
import { PropertyRetrieverService } from '../services/property-retriever.service';
import { RetrievePropertyResponseDto } from '@rent/data-layer-sdk/property/dto/retrieve-property-response.dto';

@Controller()
export class PropertyImageUploaderController {
  constructor(
    private readonly propertyRetrieverService: PropertyRetrieverService
  ) {}

  @Post('properties/:propertyId/images')
  public upload(
    @Param('propertyId') propertyId: string,
    @UploadedFiles() files: File[]
  ): Promise<RetrievePropertyResponseDto> {
    console.log(files);
    return null;
  }
}
