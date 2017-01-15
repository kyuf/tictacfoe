import { checkWin } from '../win';
import { computerAI } from '../brain';

function tictacfoeApp(state, action) {
	switch (action.type) {
		case 'MARK_SPACE':
			// do nothing if round is over or not player's turn
			if (state.roundOver || (state.playerIsX ^ state.isXTurn)) {
				return state
			}

			// only mark a space if it is blank
			let mark = {
				spaces: state.spaces.map((space, i) => (
					(i === action.index && !space) ?
					(state.isXTurn ? 'X' : 'O') : space
				)),
				isXTurn: !state.spaces[action.index] ^ state.isXTurn,
				turn: state.turn + (!state.spaces[action.index] ? 1 : 0),
			};

			// round is over if board is filled
			let end = {
				roundOver: state.turn === 9,
			};

			// check for win and update state accordingly
			if (checkWin(mark['spaces'])) {
				// logic uses XOR operators
				end = Object.assign({}, end, {
					playerScore: state.playerScore + 1,
					roundOver: true,
				});
			}

			return Object.assign({}, state, mark, end);

		case 'NEW_ROUND':
			return Object.assign({}, state, {
				isXTurn: true,
				playerIsX: !state.playerIsX,
				spaces: Array(9).fill(''),
				round: state.round + 1,
				turn: 1,
				roundOver: false,
			});

		case 'COMPUTER_MOVE':
			return Object.assign({}, state, computerAI(state));

		default:
			return state;
	}
}

export default tictacfoeApp;