import React, { PropTypes } from 'react';
import ModeButton from './ModeButton';

const Console = ({ mode, onModeClick }) => {
	return (
		<div className="console-container">
			<ModeButton
				active={mode === 'EASY'}
				label='EASY'
				onClick={() => onModeClick('EASY')} />
			<ModeButton
				active={mode === 'IMPOSSIBLE'}
				label='IMPOSSIBLE'
				onClick={() => onModeClick('IMPOSSIBLE')} />
		</div>
	)
}

Console.PropTypes = {
	mode: PropTypes.string.isRequired,
	onModeClick: PropTypes.func.isRequired,
}

export default Console;