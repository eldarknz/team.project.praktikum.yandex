// import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom';

import { Router } from './routers/Router';

function App() {
  // useEffect(() => {
  //   const fetchServerData = async () => {
  //     const url = `http://localhost:${__SERVER_PORT__}`
  //     const response = await fetch(url)
  //     const data = await response.json()
  //     console.log(data)
  //   }

  //   fetchServerData()
  // }, [])

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
