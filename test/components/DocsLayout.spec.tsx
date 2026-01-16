import React from 'react';
import { render } from '@testing-library/react';
import DocsLayout from '../../components/DocsLayout';

test('DocsLayout renders correctly', () => {
  const { asFragment } = render(<DocsLayout />);

  expect(asFragment()).toMatchSnapshot();
});
