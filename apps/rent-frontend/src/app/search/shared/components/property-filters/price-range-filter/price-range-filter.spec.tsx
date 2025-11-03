import { render } from '@testing-library/react';

import PriceRangeFilter from './price-range-filter';

describe('PriceRangeFilter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PriceRangeFilter />);
    expect(baseElement).toBeTruthy();
  });
});
