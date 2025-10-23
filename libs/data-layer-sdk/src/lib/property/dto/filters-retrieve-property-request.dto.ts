import { IsDate, IsInt, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { FiltersRetrievePropertyRequestContract } from '../contracts/filters-retrieve-property-request.contract';

export class FiltersRetrievePropertyRequestDto
  implements FiltersRetrievePropertyRequestContract
{
  @Type(() => Number)
  @IsInt()
  @IsOptional()
  public minPrice?: number;

  @Type(() => Number)
  @IsInt()
  @IsOptional()
  public maxPrice?: number;

  @Type(() => Date)
  @IsDate()
  @IsOptional()
  public minCreatedAt?: Date;

  @Type(() => Date)
  @IsDate()
  @IsOptional()
  public maxCreatedAt?: Date;
}
