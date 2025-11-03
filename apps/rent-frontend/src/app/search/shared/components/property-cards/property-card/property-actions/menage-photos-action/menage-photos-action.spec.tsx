import { render } from '@testing-library/react';

import MenagePhotosAction from './menage-photos-action';

describe('MenagePhotosAction', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MenagePhotosAction />);
    expect(baseElement).toBeTruthy();
  });
});
