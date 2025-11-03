import { create } from 'zustand';
import { RetrievePropertyRequestDto } from '../dtos/retrieve-property-request.dto';
import { FiltersRetrievePropertyRequestContract } from '@rent/data-layer-sdk/property/contracts/filters-retrieve-property-request.contract';
import { FiltersRetrievePropertyRequestDto } from '../dtos/filters-retrieve-property-request.dto';

interface FiltersState {
  page: number;
  limit: number;
  filters: FiltersRetrievePropertyRequestContract;

  setPage: (page: number) => void;
  setLimit: (limit: number) => void;
  setPriceFilter: (
    minPrice: number | undefined,
    maxPrice: number | undefined
  ) => void;
  setCreatedAtFilter: (minCreatedAt: Date, maxCreatedAt: Date) => void;
}

export const useFiltersStore = create<FiltersState>((set, get) => ({
  page: 1,
  limit: 10,
  filters: {},

  setPage: (page) => set({ page }),
  setLimit: (limit) => set({ limit }),
  setPriceFilter: (minPrice, maxPrice) =>
    set({ filters: { minPrice, maxPrice } }),
  setCreatedAtFilter: (minCreatedAt, maxCreatedAt) =>
    set({ filters: { minCreatedAt, maxCreatedAt } }),
}));

export const selectRequestDto = (state: FiltersState) => {
  console.log('selectRequestDto');

  return new RetrievePropertyRequestDto(
    state.limit,
    state.page,
    state.filters
  );
};
