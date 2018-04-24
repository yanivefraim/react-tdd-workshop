import React from 'react';
import PropTypes from 'prop-types';

const Game = ({ p1Name, p2Name, board, onCellClicked, currentPlayer }) => {
  return (
    <div data-hook="game-board">
      <span data-hook="p1-name" className={currentPlayer === 'X' ? 'current-player' : ''}>
        {p1Name}
      </span>
      <span data-hook="p2-name" className={currentPlayer === 'O' ? 'current-player' : ''}>
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
  currentPlayer: PropTypes.oneOf(['X', 'O']).isRequired,
};
export default Game;
