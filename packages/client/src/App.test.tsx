import App from './App';
import {
  render,
  screen,
} from '@testing-library/react';
import { act } from 'react-dom/test-utils';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve('hey'),
  })
);

test('Example test', async () => {
  await act(() => {
    render(<App />);
  });
  expect(screen).toBeDefined();
});
