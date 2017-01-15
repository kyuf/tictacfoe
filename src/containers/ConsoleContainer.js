import { connect } from 'react-redux';
import Console from '../components/Console';

const mapStateToProps = ({ mode } ) => {
	return {mode};
}

const ConsoleContainer = connect(
	mapStateToProps,
)(Console);

export default ConsoleContainer;