import { useQuery } from '@tanstack/react-query';
import { RetrievePropertyResponseDto } from '../dtos/retrieve-property-response.dto';
import { PropertiesRetrieverClient } from '../clients/properties-retriever.client';
import { RetrievePropertyResponseMetaDto } from '../dtos/retrieve-property-response-meta.dto';
import { RetrievePropertyResponseLinksDto } from '../dtos/retrieve-property-response-links.dto';
import { useFiltersStore } from '../store/use-filters-store';

export const useProperties = () => {
  const requestDto = useFiltersStore((state) => state.selectRequestDto);

  return useQuery<RetrievePropertyResponseDto, Error>({
    queryKey: ['properties', requestDto()],
    queryFn: () => PropertiesRetrieverClient.get(requestDto()),
    initialData: {
      items: [],
      meta: new RetrievePropertyResponseMetaDto(),
      links: new RetrievePropertyResponseLinksDto(),
    },
  });
};
