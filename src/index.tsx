import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CountProvider } from './context/provider';

ReactDOM.render(
  <React.StrictMode>
    <CountProvider>
      <App />
    </CountProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
