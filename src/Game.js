import React from 'react';
import PropTypes from 'prop-types';

const Game = ({ p1Name, p2Name, board, onCellClicked, currentPlayer }) => {
  return (
    <div data-hook="board">
      <span style={{ border: currentPlayer === 'X' && '1px solid red' }} data-hook="p1-name">
        {p1Name}
      </span>
      <span style={{ border: currentPlayer === 'O' && '1px solid red' }} data-hook="p2-name">
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
  currentPlayer: PropTypes.string.isRequired,
  board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  onCellClicked: PropTypes.func.isRequired,
};
export default Game;
