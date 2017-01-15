import React, { PropTypes } from 'react';

const ModeButton = ({ active, onClick, label }) => {
	const mode = 'mode' + (active ? ' mode-' + label.toLowerCase() : '');
	return (
		<button className={mode} onClick={onClick}>{label}</button>
	)
}

ModeButton.PropTypes = {
	active: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired,
}

export default ModeButton;