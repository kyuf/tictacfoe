import { checkWin } from './win';

export const computerAI = ({ spaces, isXTurn, turn, computerScore, mode }) => {
	const mark = isXTurn ? 'X' : 'O';
	spaces = spaces.slice();

	// determine available moves
	let moves = new Set();
	for (let i in spaces) {  // in returns indices of array
		if (!spaces[i]) {
			moves.add(i);
		}
	}

	// random selection mode
	if (mode === 'EASY') {
		let r = [...moves][Math.floor(Math.random() * moves.size)];
		spaces[r] = mark;
	} else {
		// impossible mode
		// mark center if it is available (first/second move)
		if (!spaces[4]) {
			spaces[4] = mark;
		} else if (turn === 2) {
			// mark a random corner
			let cor = [0, 2, 6, 8][Math.floor(Math.random() * 4)];
			spaces[cor] = mark;
		} else {
			// use minimax to determine best move
			let { ind } = minimax(spaces, isXTurn, moves, true, -10, 10);
			spaces[ind] = mark;
		}
	}

	let end = {};

	if (checkWin(spaces)) {
		end = {
			roundOver: true,
			computerScore: computerScore + 1,
			result: 'Computer Wins!',
		};
	} else if (turn === 9) {
		end = {roundOver: true};
	}
	

	return Object.assign(end, {
		spaces,
		isXTurn: !isXTurn,
		turn: turn + 1,
	});

}

// returns which index the computer should mark
function minimax (spaces, isXTurn, moves, isCmpTurn, a, b) {
	// continue search only if round not over
	if (checkWin(spaces)) {
		// adjust value of winning move to favor faster wins
		return {val: isCmpTurn ? -1 : 1 + moves.size};
	} else if (!moves.size) {
		return {val: 0};
	} else {
		let newSpaces, newMoves;
		let best = {
			val: isCmpTurn ? -10 : 10,
		};
		for (let i of moves) {
			newSpaces = spaces.slice();
			newMoves = new Set(moves);
			newMoves.delete(i);
			newSpaces[i] = isXTurn ? 'X' : 'O';
			let { val } = minimax(newSpaces, !isXTurn, newMoves, !isCmpTurn, a, b);
			if (isCmpTurn) {
				if (val > best['val']) {
					best = {val, ind: i};
				}
				a = Math.max(a, val);
			} else {
				if (val < best['val']) {
					best = {val, ind: i};
				}
				b = Math.min(b, val);
			}
			if (b <= a) {
				break;
			}
		}
		return best;
	}
}
