import { Expose } from 'class-transformer';
import { PropertyContract } from '@rent/data-layer-sdk/property/contracts/property.contract';

export class PropertyDto implements PropertyContract {
  @Expose()
  public id!: number;

  @Expose()
  public price!: number;

  @Expose()
  public createdAt!: Date;

  @Expose()
  public updatedAt!: Date;
}
