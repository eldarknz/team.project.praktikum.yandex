import { BrowserRouter } from 'react-router-dom';
import './styles/index.scss';
import { Router } from './routers/Router';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
