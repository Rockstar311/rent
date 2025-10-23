import { RetrievePropertyRequestDto } from '../dto/retrieve-property-request.dto';
import { RetrievePropertyResponseDto } from '../dto/retrieve-property-response.dto';

export interface PropertyRetrieverContract {
  get(
    requestDto: RetrievePropertyRequestDto
  ): Promise<RetrievePropertyResponseDto>;
}
