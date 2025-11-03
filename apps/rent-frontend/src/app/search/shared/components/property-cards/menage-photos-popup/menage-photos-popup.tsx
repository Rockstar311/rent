import Modal from '@mui/material/Modal';
import { useMenagePhotosPopup } from '../../../providers/menage-photos-popup.provider';
import Box from '@mui/material/Box';
import styles from './menage-photos-popup.module.scss';
import DropSectionMenagePhotos from './drop-section-menage-photos/drop-section-menage-photos';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '600px',
  minHeight: '400px',
  bgcolor: 'background.paper',
  border: '1px solid #adadad',
  borderRadius: '10px',
  boxShadow: 24,
};

export function MenagePhotosPopup() {
  const { isOpen, hidePopup } = useMenagePhotosPopup();

  return (
    <Modal open={isOpen} onClose={hidePopup}>
      <Box sx={style}>
        <header className={styles.header}>
          <h3 className={styles.heading}>Menage Photos</h3>
        </header>

        <main className={styles.main}>
          <DropSectionMenagePhotos />
        </main>
      </Box>
    </Modal>
  );
}

export default MenagePhotosPopup;
