import { render } from '@testing-library/react';

import MfComponent from './mf-component';

describe('MfComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MfComponent />);
    expect(baseElement).toBeTruthy();
  });
});
