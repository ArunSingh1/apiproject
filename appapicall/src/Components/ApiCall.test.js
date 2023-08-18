

import React from 'react';
import { render, screen } from '@testing-library/react';
import ApiCall from './ApiCall';

test('renders "Call API" button', () => {
  render(<ApiCall />);
  const buttonElement = screen.getByText(/CallAPI/i);
  expect(buttonElement).toBeInTheDocument();
});
