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
      isTie: false,
      currentPlayer: 'X',
    };
  }
  onNewGame = ({ p1Name, p2Name }) => {
    this.setState({ p1Name, p2Name });
  };

  handleCellClick = (rIndex, cIndex) => {
    const board = this.state.board.map(row => [...row]);
    if (!Boolean(board[rIndex][cIndex])) {
      board[rIndex][cIndex] = this.state.currentPlayer;
    }
    const gameStat = gameStatus(board);
    if (gameStat === this.state.currentPlayer) {
      this.setState({ winner: this.state.currentPlayer });
    }
    if (gameStat === 'TIE') {
      this.setState({ isTie: true });

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
        {this.state.winner && (
          <div data-hook="winner-message">
            {`${this.state.winner === 'X' ? this.state.p1Name : this.state.p2Name} won!`}
          </div>
        )}
        {this.state.isTie && (
          <div data-hook="winner-message">
            It's a tie!
          </div>
        )}
      </div>
    );
  }
}
export default App;
