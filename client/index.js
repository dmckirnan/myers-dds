import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App.jsx';

/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */

ReactDOM.render((
  <BrowserRouter>
    <div>
      <App />
    </div>
  </BrowserRouter>
), document.getElementById('root'));
