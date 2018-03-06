import React from 'react';
import PropTypes from 'prop-types';

const WinnerMessage = ({ p1Name, p2Name, winner }) => (
  <div>
    {winner && (
      <div data-hook="winner-message">
        {winner === '-' ? 'it is a tie!' : `${winner === 'X' ? p1Name : p2Name} won!`}
      </div>
    )}
  </div>
);

WinnerMessage.propTypes = {
  p1Name: PropTypes.string.isRequired,
  p2Name: PropTypes.string.isRequired,
  winner: PropTypes.string.isRequired,
};

export default WinnerMessage;
