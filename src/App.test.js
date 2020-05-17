import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  expect(document.querySelector("a").getAttribute("href")).toBe("/library");
});
