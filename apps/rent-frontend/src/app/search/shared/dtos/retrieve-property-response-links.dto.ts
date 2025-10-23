import {
  RetrievePropertyResponseLinksContract
} from '@rent/data-layer-sdk/property/contracts/retrieve-property-response-links.contract';

export class RetrievePropertyResponseLinksDto implements RetrievePropertyResponseLinksContract {
  first?: string;
  previous?: string;
  next?: string;
  last?: string;
}
