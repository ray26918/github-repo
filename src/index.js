import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RouterConfig from './Router';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux'
import rootReducer from "./redux/reducer/RootReducers";
import reduxThunk from 'redux-thunk'

const routes = RouterConfig()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(reduxThunk))
    )


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      {routes}
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

