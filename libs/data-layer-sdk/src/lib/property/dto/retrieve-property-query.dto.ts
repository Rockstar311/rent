import { IsInt, Min } from 'class-validator';
import { IPaginationOptions } from 'nestjs-typeorm-paginate/dist/interfaces';
import { Type } from 'class-transformer';

export class RetrievePropertyQueryDto implements IPaginationOptions {
  @Min(1)
  @Type(() => Number)
  @IsInt()
  public limit: number;

  @Min(1)
  @Type(() => Number)
  @IsInt()
  public page: number;
}
