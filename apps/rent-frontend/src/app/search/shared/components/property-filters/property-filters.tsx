import styles from './property-filters.module.scss';
import PriceRangeFilter from './price-range-filter/price-range-filter';

export function PropertyFilters() {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.heading}>Filters</h1>
        </header>
        <main className={styles.main}>
          <PriceRangeFilter title='Price'/>
        </main>
      </div>
    </div>
  );
}

export default PropertyFilters;
