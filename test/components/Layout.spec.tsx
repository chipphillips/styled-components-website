import React from 'react';
import { render } from '@testing-library/react';
import { Container, Content, Title, Header, SubHeader } from '../../components/Layout';

test('Container renders correctly', () => {
  const { asFragment } = render(<Container />);

  expect(asFragment()).toMatchSnapshot();
});

test('Content renders correctly', () => {
  const { asFragment } = render(<Content />);

  expect(asFragment()).toMatchSnapshot();
});

test('Title renders correctly', () => {
  const { asFragment } = render(<Title />);

  expect(asFragment()).toMatchSnapshot();
});

test('Header renders correctly', () => {
  const { asFragment } = render(<Header />);

  expect(asFragment()).toMatchSnapshot();
});

test('SubHeader renders correctly', () => {
  const { asFragment } = render(<SubHeader />);

  expect(asFragment()).toMatchSnapshot();
});
