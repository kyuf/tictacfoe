import React, { PropTypes } from 'react';
import Space from './Space'

const Board = ({ spaces, onSpaceClick, roundOver }) => {
  return (
    <div className="board-container">
      <h2>Board</h2>
      <div className="board-row">
      	<Space
      		value={spaces[0]}
      		onClick={() => onSpaceClick(0)} />
      	<Space
      		value={spaces[1]}
      		onClick={() => onSpaceClick(1)} />
      	<Space 
      		value={spaces[2]}
      		onClick={() => onSpaceClick(2)} />
      </div>
      <div className="board-row">
      	<Space
      		value={spaces[3]}
      		onClick={() => onSpaceClick(3)} />
      	<Space
      		value={spaces[4]}
      		onClick={() => onSpaceClick(4)} />
      	<Space
      		value={spaces[5]}
      		onClick={() => onSpaceClick(5)} />
      </div>
      <div className="board-row">
      	<Space
      		value={spaces[6]}
      		onClick={() => onSpaceClick(6)} />
      	<Space
      		value={spaces[7]}
      		onClick={() => onSpaceClick(7)} />
      	<Space
      		value={spaces[8]}
      		onClick={() => onSpaceClick(8)} />
      </div>
    </div>
  );
};

Board.porpTypes = {
	spaces: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
	onSpaceClick: PropTypes.func.isRequired,
}

export default Board;