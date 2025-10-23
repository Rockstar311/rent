import { FiltersRetrievePropertyRequestContract } from './filters-retrieve-property-request.contract';

export interface RetrievePropertyRequestContract {
  limit: number;
  page: number;
  filters?: FiltersRetrievePropertyRequestContract;
}
