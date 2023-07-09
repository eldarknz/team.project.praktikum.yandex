import { StaticRouter } from 'react-router-dom/server';
import { renderToString } from 'react-dom/server';
import App from './src/App';
import { Provider } from 'react-redux';

export async function render(url, store) {
  return renderToString(
    <StaticRouter location={url}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>,
  );
}
