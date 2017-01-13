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
	spaces: Array(9).fill(''),
	round: 1,
	roundOver: false,
	turn: 1,
});

ReactDOM.render(
	<Provider store={store}>
  		<App />
  	</Provider>,
  document.getElementById('root')
);
