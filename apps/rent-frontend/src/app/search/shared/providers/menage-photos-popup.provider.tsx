import { createContext, ReactNode, useContext, useState } from 'react';
import { PropertyDto } from '../dtos/property.dto';

type PopupContextValue = {
  isOpen: boolean;
  propertyDto?: PropertyDto;
  showPopup: (p: PropertyDto) => void;
  hidePopup: () => void;
};

const MenagePhotosPopupContext = createContext<PopupContextValue | undefined>(
  undefined
);

export const MenagePhotosPopupProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [propertyDto, setPropertyDto] = useState<PropertyDto>();

  const hidePopup = () => {
    setIsOpen(false);
  };

  const showPopup = (propertyDto: PropertyDto) => {
    setPropertyDto(propertyDto);
    setIsOpen(true);

    console.log(isOpen);
  };

  return (
    <MenagePhotosPopupContext.Provider
      value={{ isOpen, propertyDto, showPopup, hidePopup }}
    >
      {children}
    </MenagePhotosPopupContext.Provider>
  );
};

export const useMenagePhotosPopup = () => {
  const ctx = useContext(MenagePhotosPopupContext);
  if (!ctx)
    throw new Error('useMenagePhotosPopupContext must be used inside MenagePhotosPopupProvider');
  return ctx;
};
