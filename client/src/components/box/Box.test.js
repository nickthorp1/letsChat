import React from 'react';
import { render } from '@testing-library/react';
import Box from './Box';

test('it renders and displays the correct background color and border radius', () => {
  const { container } = render(<Box>Test content</Box>);
  const box = container.firstChild;

  expect(box).toHaveStyle('background-color: white');
  expect(box).toHaveStyle('border-radius: 10px');
});
