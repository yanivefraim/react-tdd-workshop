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
    board[rIndex][cIndex] = this.state.currentPlayer;
    if (gameStatus(board) === 'X') {
      this.setState({ winner: 'X' });
    }
    const nextPlayer = this.state.currentPlayer === 'X' ? 'O' : 'X';
    this.setState({ board, currentPlayer: nextPlayer });
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
        />
        {this.state.winner && <div data-hook="winner-message">Yaniv won!</div>}
      </div>
    );
  }
}
export default App;
