export const markSpaceOnBoard = (index) => {
	return {
		type: 'MARK_SPACE',
		index,
	};
}

export const startNewRound = () => {
	return {
		action: 'NEW_ROUND',
	};
}

export const increaseScore = () => {
	return {
		type: 'ADD_POINT',
	};
}

export const endRound = () => {
	return {
		type: 'END_ROUND',
	}
}