import React from 'react';
import PropTypes from 'prop-types';

const Game = ({ p1Name, p2Name, board, onCellClicked, currentPlayer }) => {
  return (
    <div>
      <span className={currentPlayer === 'X' ? 'next' : ''} data-hook="p1-name">
        {p1Name}
      </span>
      <span className={currentPlayer === 'O' ? 'next' : ''} data-hook="p2-name">
        {p2Name}
      </span>
      <table role="grid">
        <tbody>
          {board.map((row, rIndex) => (
            <tr key={rIndex}>
              {row.map((cell, cIndex) => (
                <td
                  key={cIndex}
                  role="gridcell"
                  data-hook="cell"
                  onClick={() => onCellClicked(rIndex, cIndex)}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Game.propTypes = {
  p1Name: PropTypes.string.isRequired,
  p2Name: PropTypes.string.isRequired,
  board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  onCellClicked: PropTypes.func.isRequired,
  currentPlayer: PropTypes.string.isRequired,
};
export default Game;
