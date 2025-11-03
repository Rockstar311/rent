import { render } from '@testing-library/react';

import PropertyFilters from './property-filters';

describe('PropertyFilters', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PropertyFilters />);
    expect(baseElement).toBeTruthy();
  });
});
