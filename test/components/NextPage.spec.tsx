import React from 'react';
import { render } from '@testing-library/react';
import NextPage from '../../components/NextPage';

test('NextPage renders correctly', () => {
  const { asFragment } = render(<NextPage href="" title="" />);

  expect(asFragment()).toMatchSnapshot();
});
