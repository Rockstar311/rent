import PropertyCard from './property-card/property-card';
import { useProperties } from '../../react-query/use-properties';
import styles from './property-cards.module.scss';
import PaginationProperties from './pagination-properties/pagination-properties';

export function PropertyCards() {
  const { data, isLoading } = useProperties();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <section className={styles.list}>
        {data.items.map((propertyDto) => (
          <PropertyCard key={propertyDto.id} propertyDto={propertyDto} />
        ))}
      </section>
      <div className={styles.pagination}>
        <PaginationProperties />
      </div>
    </div>
  );
}

export default PropertyCards;
