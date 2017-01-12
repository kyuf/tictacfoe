import React, { PropTypes } from 'react';

const Score = ({ score, isPlayer }) => {
	let who = isPlayer ? 'player' : 'computer';
	let scoreClass = who + '-score'
	return (
		<div className={scoreClass}>
			<p>{score}</p>
			<p>{who.toUpperCase()}</p>
		</div>
	)
}

Score.propTypes = {
	score: PropTypes.number.isRequired,
	isPlayer: PropTypes.bool.isRequired,
}

export default Score;