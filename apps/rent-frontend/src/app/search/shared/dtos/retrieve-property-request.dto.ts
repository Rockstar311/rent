import { RetrievePropertyRequestContract } from '@rent/data-layer-sdk/property/contracts/retrieve-property-request.contract';
import { FiltersRetrievePropertyRequestDto } from './filters-retrieve-property-request.dto';

export class RetrievePropertyRequestDto implements RetrievePropertyRequestContract {
  constructor(public limit: number,
              public page: number,
              public filters?: FiltersRetrievePropertyRequestDto) {}
}
