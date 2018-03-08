import React from 'react';
import Registration from './Registration';
import Game from './Game';
import WinnerMessage from './WinnerMessage';
import { gameStatus } from './gameService';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      p1Name: '',
      p2Name: '',
      board: [['', '', ''], ['', '', ''], ['', '', '']],
      winner: '',
      currentPlayer: 'X',
      gameStarted: false,
    };
  }
  onNewGame = ({ p1Name, p2Name }) => {
    this.setState({ p1Name, p2Name, gameStarted: true });
  };

  handleCellClick = (rIndex, cIndex) => {
    const board = this.state.board.map(row => [...row]);
    if (board[rIndex][cIndex]) {
      return;
    }
    board[rIndex][cIndex] = this.state.currentPlayer;
    const winner = gameStatus(board);
    if (winner) {
      this.setState({ winner });
    }
    const nextPlayer = this.state.currentPlayer === 'X' ? 'O' : 'X';
    this.setState({ board, currentPlayer: nextPlayer });
  };
  render() {
    const { p1Name, p2Name, winner, board, currentPlayer, gameStarted } = this.state;
    return (
      <div className="App">
        {!gameStarted && <Registration onNewGame={this.onNewGame} />}
        {gameStarted && (
          <Game
            onCellClicked={this.handleCellClick}
            board={board}
            p1Name={p1Name}
            p2Name={p2Name}
            currentPlayer={currentPlayer}
          />
        )}
        <WinnerMessage p1Name={p1Name} p2Name={p2Name} winner={winner} />
      </div>
    );
  }
}
export default App;
