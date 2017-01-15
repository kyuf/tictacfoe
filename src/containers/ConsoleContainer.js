import { connect } from 'react-redux';
import Console from '../components/Console';
import { changeMode } from '../actions/index';

const mapStateToProps = ({ mode } ) => {
	return {mode};
}

const mapDispatchToProps = (dispatch) => {
	return {
		onModeClick: (newMode) => {
			dispatch(changeMode(newMode));
		}
	};
}

const ConsoleContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Console);

export default ConsoleContainer;