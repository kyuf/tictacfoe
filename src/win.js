export const checkWin = (spaces) => {
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