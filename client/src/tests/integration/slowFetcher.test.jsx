import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import SlowFetcher from '../../components/SlowFetcher';

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ message: 'This took a while ⏳' }),
    })
  );
});

afterEach(() => {
  jest.clearAllMocks();
});

test('displays loading state and then data', async () => {
  render(<SlowFetcher />);
  expect(screen.getByText(/loading/i)).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText(/this took a while/i)).toBeInTheDocument();
  });
});
