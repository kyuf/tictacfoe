import React, { PropTypes } from 'react';
import Score from './Score';

const Scoreboard = ({
	round,
	playerScore,
	computerScore,
	roundOver,
	onClick,
}) => {
	return (
		<div className="scoreboard-container">
			<h2>ROUND {roundOver ? 'OVER' : round}</h2>
			{roundOver && <button onClick={onClick}>New Game</button>}
			<div className="score-container">
				<Score score={playerScore} isPlayer={true} />
				<Score score={computerScore} isPlayer={false} />
			</div>
		</div>
	);
};

Scoreboard.propTypes = {
	round: PropTypes.number.isRequired,
	playerScore: PropTypes.number.isRequired,
	computerScore: PropTypes.number.isRequired,
};

export default Scoreboard;