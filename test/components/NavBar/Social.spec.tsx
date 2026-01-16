import React from 'react';
import { render } from '@testing-library/react';
import Social from '../../../components/Nav/Social';

test('Social renders correctly', () => {
  const { container } = render(<Social />);

  expect(container).toMatchSnapshot();
});
