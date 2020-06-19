import React from 'react';
import { render } from '@testing-library/react';
import Header from './components/header.component';

test('renders Header title', () => {
  const { getByText } = render(<Header />);
  const headerText = getByText(/Showing pets/i);
  expect(headerText).toBeInTheDocument();
});
