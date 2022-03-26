export const indexCode = `
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// seems all good here
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
`