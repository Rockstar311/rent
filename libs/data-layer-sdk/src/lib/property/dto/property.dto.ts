import { Expose, Type } from 'class-transformer';
import { PropertyContract } from '../contracts/property.contract';
import { PropertyImageDto } from './property-image.dto';

export class PropertyDto implements PropertyContract {
  @Expose()
  public id: number;

  @Expose()
  public price: number;

  @Expose()
  public createdAt: Date;

  @Expose()
  public updatedAt: Date;

  @Expose()
  @Type(() => PropertyImageDto)
  public images: PropertyImageDto[];
}
