import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './styles/reset.css';
import './styles/normalize.css';
import './styles/fonts.css';
import './styles/global.css';

import App from './App';

const rootElement = document.querySelector('#root');

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement,
);
