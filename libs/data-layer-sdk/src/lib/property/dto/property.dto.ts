import { Expose } from 'class-transformer';

export class PropertyDto {
  @Expose()
  public id: number;

  @Expose()
  public price: number;

  @Expose()
  public createdAt: Date;

  @Expose()
  public updatedAt: Date;
}
