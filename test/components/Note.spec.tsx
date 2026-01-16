import React from 'react';
import { render } from '@testing-library/react';
import Note from '../../components/Note';

test('Note renders correctly', () => {
  const { asFragment } = render(<Note />);

  expect(asFragment()).toMatchSnapshot();
});
