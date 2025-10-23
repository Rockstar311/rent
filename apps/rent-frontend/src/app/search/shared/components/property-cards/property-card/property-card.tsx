import styles from './property-card.module.scss';
import { PropertyDto } from '../../../dtos/property.dto';

type Props = {
  propertyDto: PropertyDto;
};

export function PropertyCard({ propertyDto }: Props) {
  return (
    <section className={styles.container}>
      <p>Id: {propertyDto.id}</p>
      <p>Price: {propertyDto.price}</p>
    </section>
  );
}

export default PropertyCard;
