import { connect } from 'react-redux';
import Scoreboard from '../components/Scoreboard';

const mapStateToProps = ({ round, playerScore, computerScore, roundOver }) => {
	return {
		round,
		playerScore,
		computerScore,
		roundOver,
	};
};

const ScoreboardContainer = connect(
	mapStateToProps,
)(Scoreboard);

export default ScoreboardContainer;