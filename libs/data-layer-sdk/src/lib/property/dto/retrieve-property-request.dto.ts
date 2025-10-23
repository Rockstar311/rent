import { IsInt, IsOptional, Min, ValidateNested } from 'class-validator';
import { IPaginationOptions } from 'nestjs-typeorm-paginate/dist/interfaces';
import { Type } from 'class-transformer';
import { RetrievePropertyRequestContract } from '../contracts/retrieve-property-request.contract';
import { FiltersRetrievePropertyRequestDto } from './filters-retrieve-property-request.dto';

export class RetrievePropertyRequestDto
  implements IPaginationOptions, RetrievePropertyRequestContract
{
  @Min(1)
  @Type(() => Number)
  @IsInt()
  public limit: number;

  @Min(1)
  @Type(() => Number)
  @IsInt()
  public page: number;

  @ValidateNested()
  @IsOptional()
  @Type(() => FiltersRetrievePropertyRequestDto)
  public filters?: FiltersRetrievePropertyRequestDto;
}
