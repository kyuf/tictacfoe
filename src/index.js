import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import tictacfoeApp from './reducers/index';
import App from './App';

let store = createStore(tictacfoeApp);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
