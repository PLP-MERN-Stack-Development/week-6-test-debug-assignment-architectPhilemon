import React from 'react';
import { render, screen } from '@testing-library/react';


function HelloWorld() {
  return <h1>Hello, Test!</h1>;
}

test('renders Hello, Test!', () => {
  render(<HelloWorld />);
  expect(screen.getByText(/hello, test!/i)).toBeInTheDocument();
});
