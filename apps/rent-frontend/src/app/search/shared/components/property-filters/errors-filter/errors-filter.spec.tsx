import { render } from '@testing-library/react';

import ErrorsFilter from './errors-filter';

describe('ErrorsFilter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ErrorsFilter />);
    expect(baseElement).toBeTruthy();
  });
});
