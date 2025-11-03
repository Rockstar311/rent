import PropertyCard from './property-card/property-card';
import { useProperties } from '../../react-query/use-properties';
import styles from './property-cards.module.scss';
import PaginationProperties from './pagination-properties/pagination-properties';
import MenagePhotosPopup from './menage-photos-popup/menage-photos-popup';
import { useMenagePhotosPopup } from '../../providers/menage-photos-popup.provider';

export function PropertyCards() {
  const { data, isLoading } = useProperties();
  const { isOpen } = useMenagePhotosPopup();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <section className={styles.list}>
        {data.items.map((propertyDto) => (
          <PropertyCard key={propertyDto.id} propertyDto={propertyDto} />
        ))}
      </section>
      <div className={styles.pagination}>
        <PaginationProperties meta={data.meta} />
      </div>

      {isOpen ? <MenagePhotosPopup /> : null}
    </div>
  );
}

export default PropertyCards;
