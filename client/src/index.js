import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components';
import { NavigationContextProvider } from './contexts/navigation';
import './sass/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <NavigationContextProvider>
      <App />
    </NavigationContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
