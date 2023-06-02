import { BrowserRouter } from 'react-router-dom';

import { Router } from '@routers/Router';
import { viewerService } from '@service/ViewerService';
import { DependencyInjection } from './context/DependencyInjection';

import './styles/index.scss';

function App() {
  return (
    <DependencyInjection.Provider
      value={{ viewerService }}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </DependencyInjection.Provider>
  );
}

export default App;
