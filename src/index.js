import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import routes from './routes';
import './stylesheets/main.scss';

const reducers = combineReducers({});
const middleware = process.env.NODE_ENV !== 'production' ?
  [require('redux-immutable-state-invariant').default()] :
  [];
const store = createStore(
  reducers,
  applyMiddleware(...middleware)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {routes()}
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);