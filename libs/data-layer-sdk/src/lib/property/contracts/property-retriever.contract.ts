import { PropertyDto } from '../dto/property.dto';
import { RetrievePropertyQueryDto } from '../dto/retrieve-property-query.dto';
import { RetrievePropertyResponseDto } from '../dto/retrieve-property-response.dto';

export interface PropertyRetrieverContract {
  get(requestDto: RetrievePropertyQueryDto): Promise<RetrievePropertyResponseDto>;
}
