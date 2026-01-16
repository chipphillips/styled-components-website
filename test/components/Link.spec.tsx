import React from 'react';
import { render } from '@testing-library/react';
import Link, { InlineLink, StyledLink } from '../../components/Link';

test('Link renders correctly', () => {
  const { asFragment } = render(<Link href="/" target="_blank" />);

  expect(asFragment()).toMatchSnapshot();
});

test('StyledLink renders correctly', () => {
  const { asFragment } = render(<StyledLink href="/" />);

  expect(asFragment()).toMatchSnapshot();
});

test('InlineLink renders correctly', () => {
  const { asFragment } = render(<InlineLink href="/" />);

  expect(asFragment()).toMatchSnapshot();
});
