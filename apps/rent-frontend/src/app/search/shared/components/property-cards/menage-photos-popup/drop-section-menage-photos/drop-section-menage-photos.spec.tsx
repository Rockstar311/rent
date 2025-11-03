import { render } from '@testing-library/react';

import DropSectionMenagePhotos from './drop-section-menage-photos';

describe('DropSectionMenagePhotos', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DropSectionMenagePhotos />);
    expect(baseElement).toBeTruthy();
  });
});
