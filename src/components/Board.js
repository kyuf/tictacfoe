import React, { PropTypes, Component } from 'react';
import Space from './Space'

class Board extends Component {
  componentDidUpdate() {
    // only fire on computer turn
    if ((this.props.playerIsX ^ this.props.isXTurn) && !this.props.roundOver) {
      this.props.onComputerTurn();
    }
  }

  render() {
    const nums = [0, 1, 2];
    return (
      <div className="board-container">
        {nums.map((i) => (
          <div className="board-row" key={i}>
            {nums.map((j) => (
              <Space
                value={this.props.spaces[i*3+j]}
                key={i*3+j}
                onClick={() => this.props.onSpaceClick(i*3+j)} />
            ))}
          </div>
        ))}
      </div>
    );
  }
};

Board.porpTypes = {
	spaces: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
	onSpaceClick: PropTypes.func.isRequired,
}

export default Board;