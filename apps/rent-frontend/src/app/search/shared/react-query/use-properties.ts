import { useQuery } from '@tanstack/react-query';
import { RetrievePropertyResponseDto } from '../dtos/retrieve-property-response.dto';
import { PropertiesRetrieverClient } from '../clients/properties-retriever.client';
import { RetrievePropertyResponseMetaDto } from '../dtos/retrieve-property-response-meta.dto';
import { RetrievePropertyResponseLinksDto } from '../dtos/retrieve-property-response-links.dto';
import { selectRequestDto, useFiltersStore } from '../store/use-filters-store';
import { useShallow } from 'zustand/shallow';

export const USE_PROPERTIES_KEY = 'properties';

export const useProperties = () => {
  const requestDto = useFiltersStore(useShallow(selectRequestDto));

  return useQuery<RetrievePropertyResponseDto, Error>({
    queryKey: [USE_PROPERTIES_KEY, requestDto],
    queryFn: () => PropertiesRetrieverClient.get(requestDto),
    initialDataUpdatedAt: 0,
    initialData: {
      items: [],
      meta: new RetrievePropertyResponseMetaDto(),
      links: new RetrievePropertyResponseLinksDto(),
    },
  });
};
