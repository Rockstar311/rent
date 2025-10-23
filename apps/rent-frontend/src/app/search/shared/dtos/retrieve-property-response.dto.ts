import { RetrievePropertyResponseContract } from '@rent/data-layer-sdk/property/contracts/retrieve-property-response.contract';
import { PropertyDto } from './property.dto';
import { RetrievePropertyResponseMetaDto } from './retrieve-property-response-meta.dto';
import { RetrievePropertyResponseLinksDto } from './retrieve-property-response-links.dto';
import { Expose, Type } from 'class-transformer';

export class RetrievePropertyResponseDto
  implements RetrievePropertyResponseContract
{
  @Expose()
  @Type(() => PropertyDto)
  public items!: PropertyDto[];

  @Expose()
  @Type(() => RetrievePropertyResponseMetaDto)
  public meta!: RetrievePropertyResponseMetaDto;

  @Expose()
  @Type(() => RetrievePropertyResponseLinksDto)
  public links?: RetrievePropertyResponseLinksDto;
}
