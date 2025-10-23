import { RetrievePropertyResponseMetaContract } from '@rent/data-layer-sdk/property/contracts/retrieve-property-response-meta.contract';

export class RetrievePropertyResponseMetaDto
  implements RetrievePropertyResponseMetaContract
{
  public totalItems!: number;
  public itemCount!: number;
  public itemsPerPage!: number;
  public totalPages!: number;
  public currentPage!: number;
}
