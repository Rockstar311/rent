import { render } from '@testing-library/react';

import PaginationProperties from './pagination-properties';

describe('PaginationProperties', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PaginationProperties />);
    expect(baseElement).toBeTruthy();
  });
});
