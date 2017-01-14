import React, { PropTypes } from 'react';
import Space from './Space'

const Board = ({ spaces, onSpaceClick, roundOver }) => {
  const nums = [0, 1, 2];
  return (
    <div className="board-container">
      {nums.map((i) => (
        <div className="board-row" key={i}>
          {nums.map((j) => (
            <Space
              value={spaces[i*3+j]}
              key={i*3+j}
              onClick={() => onSpaceClick(i*3+j)} />
          ))}
        </div>
      ))}
    </div>
  );
};

Board.porpTypes = {
	spaces: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
	onSpaceClick: PropTypes.func.isRequired,
}

export default Board;