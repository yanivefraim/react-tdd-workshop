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
      p1Wins: 0,
      p2Wins: 0,
    };
  }
  onNewGame = ({ p1Name, p2Name }) => {
    const p1Wins = localStorage.getItem(p1Name);
    const p2Wins = localStorage.getItem(p2Name);

    this.setState({
      p1Name,
      p2Name,
      p1Wins: p1Wins ? parseInt(p1Wins, 10) : 0,
      p2Wins: p2Wins ? parseInt(p2Wins, 10) : 0,
    });
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

      if (this.state.currentPlayer === 'X') {
        localStorage.setItem(this.state.p1Name, this.state.p1Wins + 1);
      } else {
        localStorage.setItem(this.state.p2Name, this.state.p2Wins + 1);
      }
    }
    const nextPlayer = this.state.currentPlayer === 'X' ? 'O' : 'X';
    this.setState({ board, currentPlayer: nextPlayer, tie: gameStatus(board) === 'tie' });
  };

  saveGame = () => {
    localStorage.setItem('gameState', JSON.stringify(this.state));
  };

  loadGame = () => {
    this.setState(JSON.parse(localStorage.getItem('gameState')));
  };

  render() {
    const shouldShowRegistration = !this.state.p1Name || this.state.tie || this.state.winner;
    const winCount = this.state.winner === 'X' ? this.state.p1Wins : this.state.p2Wins;
    return (
      <div className="App">
        {shouldShowRegistration && <Registration onNewGame={this.onNewGame} />}
        {this.state.p1Name && (
          <Game
            onCellClicked={this.handleCellClick}
            board={this.state.board}
            p1Name={this.state.p1Name}
            p2Name={this.state.p2Name}
            currentPlayer={this.state.currentPlayer}
          />
        )}
        {this.state.winner && (
          <div data-hook="winner-message">
            {`${this.state.winner === 'X' ? this.state.p1Name : this.state.p2Name} won!`}
            {winCount > 0 && ` He won ${winCount} times before that!`}
          </div>
        )}
        {this.state.tie && <div data-hook="tie-message">It&apos;s a tie!</div>}
        <button data-hook="save-game" onClick={this.saveGame}>
          Save game!
        </button>
        <button data-hook="load-game" onClick={this.loadGame}>
          Load game!
        </button>
      </div>
    );
  }
}
export default App;
