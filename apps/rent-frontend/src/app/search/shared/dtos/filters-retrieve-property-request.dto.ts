import { FiltersRetrievePropertyRequestContract } from '@rent/data-layer-sdk/property/contracts/filters-retrieve-property-request.contract';

export class FiltersRetrievePropertyRequestDto
  implements FiltersRetrievePropertyRequestContract
{
  constructor(public minPrice?: number,
              public maxPrice?: number,
              public minCreatedAt?: Date,
              public maxCreatedAt?: Date) {}
}
