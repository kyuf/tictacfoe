import { checkWin } from './win';

export const minimax = ({ spaces, isXTurn, turn }) => {
	let mark = isXTurn ? 'X' : 'O';
	spaces = spaces.slice();

	// mark center if it is available (first/second move)
	if (!spaces[4]) {
		spaces[4] = mark;
	} else {
		return {};
	}

	return {
		spaces,
		isXTurn: !isXTurn,
		turn: turn + 1,
		roundOver: checkWin(spaces) || turn === 9,
	}

}
