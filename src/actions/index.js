export const markSpaceOnBoard = (player, index) => {
	return {
		type: 'MARK_SPACE',
		player,
		index,
	};
}

export const startNewRound = () => {
	return {
		action: 'NEW_ROUND',
	};
}

export const increaseScore = (player) => {
	return {
		type: 'ADD_POINT',
		player,
	};
}

export const endRound = () => {
	return {
		type: 'END_ROUND',
	}
}