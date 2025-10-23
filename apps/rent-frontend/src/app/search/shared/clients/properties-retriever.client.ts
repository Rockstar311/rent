import axios from 'axios';
import { RetrievePropertyRequestDto } from '../dtos/retrieve-property-request.dto';
import { RetrievePropertyResponseDto } from '../dtos/retrieve-property-response.dto';
import { plainToInstance } from 'class-transformer';

export class PropertiesRetrieverClient {
  private static readonly URL = '/properties';

  private static readonly client = axios.create({
    baseURL: import.meta.env.VITE_BASE_API_URL + PropertiesRetrieverClient.URL,
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
  });

  public static async get(
    requestDto: RetrievePropertyRequestDto
  ): Promise<RetrievePropertyResponseDto> {
    return PropertiesRetrieverClient.client
      .request({ data: requestDto })
      .then((response) =>
        plainToInstance(RetrievePropertyResponseDto, response.data)
      );
  }
}
