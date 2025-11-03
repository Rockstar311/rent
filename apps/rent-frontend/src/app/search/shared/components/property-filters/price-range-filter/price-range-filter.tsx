import styles from './price-range-filter.module.scss';
import WrapperFilter from '../wrapper-filter/wrapper-filter';
import { usePriceRangeFilter } from './use-price-range-filter';

type Props = {
  title: string;
};

export function PriceRangeFilter({ title }: Props) {
  const formik = usePriceRangeFilter();

  return (
    <WrapperFilter title={title}>
      <div className={styles.container}>
        <input
          onChange={formik.handleChange}
          name="min"
          value={formik.values.min ?? ''}
          className={`${styles.input} ${formik.errors.min ? styles.error : ''}`}
          type="number"
        />

        <input
          onChange={formik.handleChange}
          name="max"
          value={formik.values.max ?? ''}
          className={`${styles.input} ${formik.errors.max ? styles.error : ''}`}
          type="number"
        />
      </div>
    </WrapperFilter>
  );
}

export default PriceRangeFilter;
