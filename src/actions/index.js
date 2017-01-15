export const markSpaceOnBoard = (index) => {
	return {
		type: 'MARK_SPACE',
		index,
	};
}

export const startNewRound = () => {
	return {
		type: 'NEW_ROUND',
	};
}

export const computerMove = () => {
	return {
		type: 'COMPUTER_MOVE',
	}
}