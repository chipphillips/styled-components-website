import React from 'react';
import { render } from '@testing-library/react';
import { LiveProvider } from 'react-live-runner';
import LiveEdit, { StyledError } from '../../components/LiveEdit';

test('LiveEdit renders correctly', () => {
  const { asFragment } = render(<LiveEdit />);

  expect(asFragment()).toMatchSnapshot();
});

test('StyledError renders correctly', () => {
  const { asFragment } = render(
    <LiveProvider code="">
      <StyledError />
    </LiveProvider>
  );

  expect(asFragment()).toMatchSnapshot();
});
