function tictacfoeApp(state, action) {
	switch (action.type) {
		case 'MARK_SQUARE':
			return Object.assign({}, state, {
				board: state.board.map((space, i) => (
					i === action.index ? action.player : space
				)),
				isXTurn: !state.isXTurn,
			});
		case 'ADD_POINT':
			// logic uses XOR operators
			let pWin = !(!(action.player === 'X') ^ !state.playerIsX) ? 1 : 0;
			return Object.assign({}, state, {
				// logic uses XOR operators
				playerScore: state.playerScore + pWin,
				computerScore: state.computerScore + (1 - pWin),
			});
		case 'END_ROUND':
			return Object.assign({}, state, {
				roundOver: true,
			})
		case 'NEW_ROUND':
			return Object.assign({}, state, {
				isXTurn: true,
				playerIsX: !state.playerIsX,
				board: Array(9).fill(null),
				round: state.round + 1,
				roundOver: false,
			});
		default:
			return state;
	}
}

export default tictacfoeApp;