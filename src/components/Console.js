import React, { PropTypes } from 'react';

const Console = ({ mode }) => {
	return (
		<div>
			<button>Normal</button>
			<button>Impossible</button>
		</div>
	)
}

Console.PropTypes = {
	mode: PropTypes.string.isRequired,
}

export default Console;