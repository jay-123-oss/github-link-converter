import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('renders convert button', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/convert url/i);
  expect(linkElement).toBeInTheDocument();
});
