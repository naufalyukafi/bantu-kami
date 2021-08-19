import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders test', () => {
  render(<Home />);
  const linkElement = screen.getByText('Cari ketersediaan kamar di rumah sakit terdekat anda!');
  expect(linkElement).toBeInTheDocument();
});
