import { render } from '@testing-library/react';

import PropertyActions from './property-actions';

describe('PropertyActions', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PropertyActions />);
    expect(baseElement).toBeTruthy();
  });
});
