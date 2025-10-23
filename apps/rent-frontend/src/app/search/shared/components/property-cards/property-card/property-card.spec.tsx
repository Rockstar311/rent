import { render } from '@testing-library/react';

import PropertyCard from './property-card';

describe('PropertyCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PropertyCard />);
    expect(baseElement).toBeTruthy();
  });
});
