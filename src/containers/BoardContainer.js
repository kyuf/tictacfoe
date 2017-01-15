import { connect } from 'react-redux';
import { markSpaceOnBoard, computerMove } from '../actions/index';
import Board from '../components/Board';

const mapStateToProps = ({ spaces, playerIsX, isXTurn }) => {
	return {
		spaces,
		isXTurn,
		playerIsX,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSpaceClick: (index) => {
			dispatch(markSpaceOnBoard(index))
		},
		onComputerTurn: (spaces, isXTurn) => {
			dispatch(computerMove(spaces, isXTurn))
		},
	}
}

const BoardContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Board)

export default BoardContainer;