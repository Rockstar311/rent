import { RetrievePropertyResponseContract } from '../contracts/retrieve-property-response.contract';
import { PropertyContract } from '../contracts/property.contract';
import { RetrievePropertyResponseLinksContract } from '../contracts/retrieve-property-response-links.contract';
import { RetrievePropertyResponseMetaContract } from '../contracts/retrieve-property-response-meta.contract';

export class RetrievePropertyResponseDto
  implements RetrievePropertyResponseContract
{
  constructor(
    public items: PropertyContract[],
    public meta: RetrievePropertyResponseMetaContract,
    public links: RetrievePropertyResponseLinksContract
  ) {}
}
