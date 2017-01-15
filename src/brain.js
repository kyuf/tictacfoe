import { checkWin } from './win';

export const minimax = ({ spaces, isXTurn, turn }) => {
	let mark = isXTurn ? 'X' : 'O';
	spaces = spaces.slice();

	// mark center if it is available (first/second move)
	if (!spaces[4]) {
		spaces[4] = mark;
	} else if (turn === 2) {
		// mark a random corner
		let r = [0, 2, 6, 8][Math.floor(Math.random() * 4)];
		spaces[r] = mark;
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
