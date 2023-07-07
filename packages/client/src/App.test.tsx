import { Provider } from 'react-redux';
import App from './App';
import { render, screen } from '@testing-library/react';
import { store } from '@service/store';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve('hey'),
  }),
);

test('Example test', async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  expect(screen).toBeDefined();
});
