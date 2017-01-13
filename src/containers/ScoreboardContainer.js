import { connect } from 'react-redux';
import { startNewRound } from '../actions/index'
import Scoreboard from '../components/Scoreboard';

const mapStateToProps = ({ round, playerScore, computerScore, roundOver }) => {
	return {
		round,
		playerScore,
		computerScore,
		roundOver,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onClick: () => {
			dispatch(startNewRound())
		}
	}
}

const ScoreboardContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Scoreboard);

export default ScoreboardContainer;