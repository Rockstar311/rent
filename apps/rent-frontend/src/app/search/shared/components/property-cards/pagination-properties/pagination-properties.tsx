import styles from './pagination-properties.module.scss';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useFiltersStore } from '../../../store/use-filters-store';
import { RetrievePropertyResponseMetaDto } from '../../../dtos/retrieve-property-response-meta.dto';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from '@mui/material/IconButton';

const ROW_PER_PAGES = [10, 30, 50];

type Props = {
  meta: RetrievePropertyResponseMetaDto;
};

export function PaginationProperties({ meta }: Props) {
  const { setLimit, setPage } = useFiltersStore();

  const handleRowPerPageChange = (event: SelectChangeEvent<number>): void => {
    setLimit(event.target.value);
  };

  const handlePreviousPage = () => {
    if (!cantGoPrevious) return;

    setPage(meta.currentPage - 1);
  };

  const handleNextPage = () => {
    if (!cantGoNext) return;

    setPage(meta.currentPage + 1);
  };

  const cantGoPrevious = meta.currentPage > 1;
  const cantGoNext = meta.currentPage * meta.itemsPerPage < meta.totalItems;

  return (
    <div className={styles.container}>
      <Select
        size={'small'}
        onChange={handleRowPerPageChange}
        value={meta?.itemsPerPage || ROW_PER_PAGES[0]}
      >
        {' '}
        {ROW_PER_PAGES.map((value) => (
          <MenuItem key={value} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>{' '}
      <IconButton disabled={!cantGoPrevious} onClick={handlePreviousPage}>
        <ArrowBackIosNewIcon />
      </IconButton>
      <span className={styles.label}>
        {meta.currentPage &&
          (meta.currentPage === 1
            ? 1
            : (meta.currentPage - 1) * meta.itemsPerPage)}
      </span>
      <span className={styles.label}>-</span>
      <span className={styles.label}>
        {meta.currentPage && meta.currentPage * meta.itemsPerPage}
      </span>
      <IconButton disabled={!cantGoNext} onClick={handleNextPage}>
        <ArrowForwardIosIcon />
      </IconButton>
      <span className={styles.label}>Total: {meta?.totalItems}</span>
    </div>
  );
}

export default PaginationProperties;
