import React from 'react';
import { render } from '@testing-library/react';
import Code from '../../components/Code';

test('Code renders correctly', () => {
  const { asFragment } = render(<Code />);

  expect(asFragment()).toMatchSnapshot();
});
