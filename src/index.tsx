import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/index.css';

import { render } from 'react-dom'; // Import render from ReactDOM

render(
  <React.StrictMode>
    <BrowserRouter basename="/chatWithAi">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

