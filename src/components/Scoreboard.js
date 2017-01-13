import React, { PropTypes } from 'react';
import Score from './Score';

const Scoreboard = ({
	round,
	playerScore,
	computerScore,
	roundOver,
	onClick,
}) => {
	let evenRound = round % 2 === 0;
	return (
		<div className="scoreboard-container">
			<h2>ROUND {roundOver ? 'OVER' : round}</h2>
			{roundOver && <button onClick={onClick}>New Game</button>}
			<div className="score-container">
				<Score
					score={playerScore}
					isPlayer={true}
					evenRound={evenRound} />
				<Score
					score={computerScore}
					isPlayer={false}
					evenRound={evenRound} />
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