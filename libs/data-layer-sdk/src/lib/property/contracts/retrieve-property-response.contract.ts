import { PropertyContract } from './property.contract';
import { RetrievePropertyResponseLinksContract } from './retrieve-property-response-links.contract';
import { RetrievePropertyResponseMetaContract } from './retrieve-property-response-meta.contract';

export interface RetrievePropertyResponseContract {
  items: PropertyContract[];
  meta: RetrievePropertyResponseMetaContract;
  links?: RetrievePropertyResponseLinksContract;
}
