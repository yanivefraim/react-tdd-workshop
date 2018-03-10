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

  handleCellClick = (rIndex, cIndex) => {
    const board = this.state.board.map(row => [...row]);
    if (board[rIndex][cIndex]) return;
    board[rIndex][cIndex] = this.state.currentPlayer;
    if (gameStatus(board) === 'Tie') {
      this.setState({ winner: 'Tie' });
      return;
    }
    if (gameStatus(board) === this.state.currentPlayer) {
      this.setState({ winner: this.state.currentPlayer });
    }
    const nextPlayer = this.state.currentPlayer === 'X' ? 'O' : 'X';
    this.setState({ board, currentPlayer: nextPlayer });
  };
  render() {
    let winnerText;
    if (this.state.winner === 'Tie') {
      winnerText = "It's a tie!";
    } else if (this.state.winner === 'X') {
      winnerText = `${this.state.p1Name} won!`;
    } else {
      winnerText = `${this.state.p2Name} won!`;
    }
    return (
      <div className="App">
        <Registration onNewGame={this.onNewGame} />
        <Game
          onCellClicked={this.handleCellClick}
          board={this.state.board}
          p1Name={this.state.p1Name}
          p2Name={this.state.p2Name}
        />
        {this.state.winner && <div data-hook="winner-message">{winnerText}</div>}
      </div>
    );
  }
}
export default App;
