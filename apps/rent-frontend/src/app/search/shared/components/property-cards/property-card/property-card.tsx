import styles from './property-card.module.scss';
import { PropertyDto } from '../../../dtos/property.dto';
import PropertyActions from './property-actions/property-actions';

type Props = {
  propertyDto: PropertyDto;
};

export function PropertyCard({ propertyDto }: Props) {
  return (
    <section className={styles.container}>
      <PropertyActions propertyDto={propertyDto} />
      <p>Id: {propertyDto.id}</p>
      <p>Price: {propertyDto.price}</p>
    </section>
  );
}

export default PropertyCard;
