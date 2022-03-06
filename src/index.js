import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RouterConfig from './Router';

const routes = RouterConfig()

ReactDOM.render(
  <React.StrictMode>
    {routes}
  </React.StrictMode>,
  document.getElementById('root')
);

