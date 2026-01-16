import React from 'react';
import { render } from '@testing-library/react';
import Anchor from '../../components/Anchor';

test('Anchor renders correctly', () => {
  const { asFragment } = render(<Anchor />);

  expect(asFragment()).toMatchSnapshot();
});
