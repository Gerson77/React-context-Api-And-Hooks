import React from 'react';
import ReactDOM from 'react-dom';
import { CounterProvider } from './context/CounterContext';
import './styles/global.styles.css';
import { Home } from './Templates/Home';

ReactDOM.render(
  <CounterProvider>
    <Home />
  </CounterProvider>,
  document.getElementById('root'),
);
