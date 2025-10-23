import { create } from 'zustand';
import { RetrievePropertyRequestDto } from '../dtos/retrieve-property-request.dto';

interface FiltersState {
  page: number;
  limit: number;

  setPage: (page: number) => void;
  setLimit: (limit: number) => void;

  selectRequestDto: () => RetrievePropertyRequestDto;
}

export const useFiltersStore = create<FiltersState>((set, get) => ({
  page: 1,
  limit: 10,

  setPage: (page) => set({ page }),
  setLimit: (limit) => set({ limit }),

  selectRequestDto: () => {
    const { limit, page } = get();

    return new RetrievePropertyRequestDto(limit, page);
  },
}));
