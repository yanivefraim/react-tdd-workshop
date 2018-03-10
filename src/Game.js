import React from 'react';
import PropTypes from 'prop-types';

const Game = ({ currentPlayer, p1Name, p2Name, board, onCellClicked }) => {
  const activeStyles = { border: '1px solid black' };
  const styles1 = currentPlayer === 'X' ? activeStyles : {};
  const styles2 = currentPlayer === 'O' ? activeStyles : {};
  return (
    <div>
      <span style={styles1} data-hook="p1-name">
        {p1Name}
      </span>
      <span style={styles2} data-hook="p2-name">
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
  currentPlayer: PropTypes.string.isRequired,
  p1Name: PropTypes.string.isRequired,
  p2Name: PropTypes.string.isRequired,
  board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  onCellClicked: PropTypes.func.isRequired,
};
export default Game;
