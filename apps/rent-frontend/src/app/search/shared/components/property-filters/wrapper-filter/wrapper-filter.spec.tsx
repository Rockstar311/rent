import { render } from '@testing-library/react';

import WrapperFilter from './wrapper-filter';

describe('WrapperFilter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WrapperFilter />);
    expect(baseElement).toBeTruthy();
  });
});
