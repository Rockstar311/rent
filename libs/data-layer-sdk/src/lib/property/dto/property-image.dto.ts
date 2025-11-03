import { Expose } from 'class-transformer';
import { PropertyImageContract } from '../contracts/property-image.contract';

export class PropertyImageDto implements PropertyImageContract {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public createdAt: Date;
}
