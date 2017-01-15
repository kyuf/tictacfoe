import { minimax } from '../brain';

function tictacfoeApp(state, action) {
	function checkWin(spaces) {
		// someone has won if one of the following patterns is made
		const indices = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		for (let i of indices) {
			if ((spaces[i[0]] + spaces[i[1]] + spaces[i[2]]).length === 3
				&& spaces[i[0]] === spaces[i[1]]
				&& spaces[i[1]] === spaces[i[2]]) {
				return true;
			}
		}
		return false;
	}

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
				let pWin = (!state.isXTurn ^ state.playerIsX) ? 1 : 0;
				end = Object.assign({}, end, {
					playerScore: state.playerScore + pWin,
					computerScore: state.computerScore + (1 - pWin),
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
			minimax(state.spaces, state.isXTurn);
			return state;

		default:
			return state;
	}
}

export default tictacfoeApp;