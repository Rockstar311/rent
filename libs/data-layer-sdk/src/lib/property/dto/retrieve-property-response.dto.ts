import { Pagination } from 'nestjs-typeorm-paginate';
import { PropertyDto } from './property.dto';

export class RetrievePropertyResponseDto extends Pagination<PropertyDto>{

}
