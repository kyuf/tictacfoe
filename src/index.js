import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import tictacfoeApp from './reducers/index';
import App from './App';

let store = createStore(tictacfoeApp, {
	isXTurn: true,
	playerIsX: true,
	computerScore: 0,
	playerScore: 0,
	board: Array(9).fill(null),
	round: 1,
	roundOver: false,
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
