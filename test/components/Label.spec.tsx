import React from 'react';
import { render } from '@testing-library/react';
import Label, { LabelGroup } from '../../components/Label';

test('Label renders correctly', () => {
  const { asFragment } = render(<Label />);

  expect(asFragment()).toMatchSnapshot();
});

test('LabelGroup renders correctly', () => {
  const { asFragment } = render(<LabelGroup />);

  expect(asFragment()).toMatchSnapshot();
});
