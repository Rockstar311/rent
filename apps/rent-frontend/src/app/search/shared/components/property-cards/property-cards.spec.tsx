import { render } from '@testing-library/react';

import PropertyCards from './property-cards';

describe('PropertyCards', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PropertyCards />);
    expect(baseElement).toBeTruthy();
  });
});
