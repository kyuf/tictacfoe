import { connect } from 'react-redux';
import { markSpaceOnBoard } from '../actions/index';
import Board from '../components/Board';

const mapStateToProps = ({ isXTurn, spaces, roundOver }) => {
	return {
		isXTurn,
		spaces,
		roundOver,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSpaceClick: (i) => {
			dispatch(markSpaceOnBoard(i))
		}
	}
}

const BoardContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Board)

export default BoardContainer;