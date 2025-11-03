import styles from './search.module.scss';
import PropertyCards from './shared/components/property-cards/property-cards';
import PropertyFilters from './shared/components/property-filters/property-filters';
import { MenagePhotosPopupProvider } from './shared/providers/menage-photos-popup.provider';
import MenagePhotosPopup from './shared/components/property-cards/menage-photos-popup/menage-photos-popup';

export function Search() {
  return (
    <div className={styles.container}>
      <section className={styles.filters}>
        <PropertyFilters />
      </section>
      <section className={styles.list}>
        <MenagePhotosPopupProvider>
          <PropertyCards />
        </MenagePhotosPopupProvider>
      </section>
    </div>
  );
}

export default Search;
