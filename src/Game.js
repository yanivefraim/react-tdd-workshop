import React from 'react';
import PropTypes from 'prop-types';

const Game = props => {
  return (
    <div>
      <span data-hook="p1-name">{props.p1Name}</span>
      <span data-hook="p2-name">{props.p2Name}</span>
      <table>
        <tbody>
          <tr>
            <td data-hook="cell">X</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Game.propTypes = {
  p1Name: PropTypes.string.isRequired,
  p2Name: PropTypes.string.isRequired,
};
export default Game;
