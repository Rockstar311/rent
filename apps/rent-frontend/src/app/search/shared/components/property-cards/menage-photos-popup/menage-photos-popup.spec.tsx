import { render } from '@testing-library/react';

import MenagePhotosPopup from './menage-photos-popup';

describe('MenagePhotosPopup', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MenagePhotosPopup />);
    expect(baseElement).toBeTruthy();
  });
});
