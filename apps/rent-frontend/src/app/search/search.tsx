import styles from './search.module.scss';
import PropertyCards from './shared/components/property-cards/property-cards';

export function Search() {
  return (
    <div className={styles.container}>
      <PropertyCards />
    </div>
  );
}

export default Search;
