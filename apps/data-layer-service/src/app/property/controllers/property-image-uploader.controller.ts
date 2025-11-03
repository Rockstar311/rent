import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { PropertyPattern } from '@rent/data-layer-sdk/property/patterns/property.pattern';

@Controller()
export class PropertyImageUploaderController {
  @MessagePattern(PropertyPattern.GetProperties)
  public upload(propertyId: string, photos: File[]) {
    return null;
  }
}
