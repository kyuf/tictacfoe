import { connect } from 'react-redux';
import Scoreboard from '../components/Scoreboard';

const mapStateToProps = ({ round, playerScore, computerScore }) => {
	return {
		round,
		playerScore,
		computerScore,
	};
};

const ScoreboardContainer = connect(
	mapStateToProps,
)(Scoreboard);

export default ScoreboardContainer;