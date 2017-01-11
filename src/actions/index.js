function markSquareOnBoard(player, index) {
	return {
		type: 'MARK_SQUARE',
		player,
		index,
	};
}

function startNewRound() {
	return {
		action: 'NEW_ROUND',
	};
}

function increaseScore(player) {
	return {
		type: 'ADD_POINT',
		player,
	};
}

function endRound() {
	return {
		type: 'END_ROUND',
	}
}