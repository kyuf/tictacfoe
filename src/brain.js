import { checkWin } from './win';

export const computerAI = ({ spaces, isXTurn, turn, computerScore }) => {
	const mark = isXTurn ? 'X' : 'O';
	spaces = spaces.slice();

	// mark center if it is available (first/second move)
	if (!spaces[4]) {
		spaces[4] = mark;
	} else if (turn === 2) {
		// mark a random corner
		let r = [0, 2, 6, 8][Math.floor(Math.random() * 4)];
		spaces[r] = mark;
	} else {
		// determine available moves
		let moves = new Set();
		for (let i in spaces) {  // in returns indices of array
			if (!spaces[i]) {
				moves.add(i);
			}
		}
		// use minimax to determine best move
		let { ind } = minimax(spaces, isXTurn, mark, moves);
		spaces[ind] = mark;
	}

	let end = {};

	if (checkWin(spaces)) {
		end = {
			roundOver: true,
			computerScore: computerScore + 1,
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
function minimax (spaces, isXTurn, mark, moves) {
	// continue search only if round not over
	const isComputerTurn = mark === 'X' ^ isXTurn;
	if (checkWin(spaces)) {
		return {val: isComputerTurn ? -1 : 1};
	} else if (!moves.size) {
		return {val: 0};
	} else {
		let newSpaces, newMoves;
		let best = {
			val: isComputerTurn ? -2 : 2,
		};
		for (let i of moves) {
			newSpaces = spaces.slice();
			newMoves = new Set(moves);
			newMoves.delete(i);
			newSpaces[i] = isXTurn ? 'X' : 'O';
			let { val } = minimax(newSpaces, !isXTurn, mark, newMoves);
			if (isComputerTurn) {
				if (val > best['val']) {
					best = {val, ind: i};
				}
			} else {
				if (val < best['val']) {
					best = {val, ind: i};
				}
			}
		}
		return best;
	}
}