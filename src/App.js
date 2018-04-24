import React from 'react';
import Registration from './Registration';
import Game from './Game';
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
    };
  }
  onNewGame = ({ p1Name, p2Name }) => {
    this.setState({ p1Name, p2Name });
  };

  isCellAlreadySet(rIndex, cIndex) {
    const { board } = this.state;
    return board[rIndex][cIndex] === 'X' || board[rIndex][cIndex] === 'O';
  }

  handleCellClick = (rIndex, cIndex) => {
    if (this.isCellAlreadySet(rIndex, cIndex)) {
      return;
    }

    const board = this.state.board.map(row => [...row]);
    board[rIndex][cIndex] = this.state.currentPlayer;
    if (gameStatus(board) === this.state.currentPlayer) {
      this.setState({ winner: this.state.currentPlayer });
    }
    const nextPlayer = this.state.currentPlayer === 'X' ? 'O' : 'X';
    this.setState({ board, currentPlayer: nextPlayer, tie: gameStatus(board) === 'tie' });
  };
  render() {
    return (
      <div className="App">
        <Registration onNewGame={this.onNewGame} />
        <Game
          onCellClicked={this.handleCellClick}
          board={this.state.board}
          p1Name={this.state.p1Name}
          p2Name={this.state.p2Name}
          currentPlayer={this.state.currentPlayer}
        />
        {this.state.winner && (
          <div data-hook="winner-message">
            {`${this.state.winner === 'X' ? this.state.p1Name : this.state.p2Name} won!`}
          </div>
        )}
        {this.state.tie && <div data-hook="tie-message">It's a tie!</div>}
      </div>
    );
  }
}
export default App;
