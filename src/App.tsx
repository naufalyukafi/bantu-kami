import React from 'react';
import Routes from './constants/routes';
import ApiContext from './contexts/Api-Context';

function App() {
  return (
    <ApiContext>
      <Routes />
    </ApiContext>
  );
}

export default App;
