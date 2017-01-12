import React, { PropTypes } from 'react';

const Space = ({ onClick,  value }) => {
  return (
    <button
      className='space'
      onClick={onClick}>{value}</button>
  );
};

Space.propTypes = {
	onClick: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
}

export default Space;