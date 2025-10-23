import styles from './pagination-properties.module.scss';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useProperties } from '../../../react-query/use-properties';
import { useFiltersStore } from '../../../store/use-filters-store';

const ROW_PER_PAGES = [10, 30, 50];

export function PaginationProperties() {
  const { data } = useProperties();
  const {setPage, setLimit} = useFiltersStore();

  const handleRowPerPageChange = (event: SelectChangeEvent<number>): void => {
    console.log(event.target.value);
    setLimit(event.target.value);
  }

  return (
    <div className={styles.container}>
      <Select
        disabled={!data.meta}
        size={'small'}
        onChange={handleRowPerPageChange}
        value={data?.meta?.itemsPerPage || ROW_PER_PAGES[0]}
      >
        {' '}
        {ROW_PER_PAGES.map((value) => (
          <MenuItem key={value} value={value}>{value}</MenuItem>
        ))}
      </Select>{' '}
    </div>
  );
}

export default PaginationProperties;
