import MenuItem from '@mui/material/MenuItem';
import { PropertyDto } from '../../../../../dtos/property.dto';
import { useMenagePhotosPopup } from '../../../../../providers/menage-photos-popup.provider';

type Props = {
  propertyDto: PropertyDto;
  onHide: () => void;
};

export function MenagePhotosAction({ propertyDto, onHide }: Props) {
  const { showPopup } = useMenagePhotosPopup();

  const onClick = () => {
    showPopup(propertyDto);
    onHide();
  };

  return <MenuItem onClick={onClick}>Menage Photos</MenuItem>;
}

export default MenagePhotosAction;
