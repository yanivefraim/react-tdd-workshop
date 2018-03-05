import React from 'react';
import Registration from './Registration';
import Game from './Game';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      p1Name: '',
      p2Name: '',
    };
  }
  onNewGame = ({ p1Name, p2Name }) => {
    this.setState({ p1Name, p2Name });
  };
  render() {
    return (
      <div className="App">
        <Registration onNewGame={this.onNewGame} />
        <Game p1Name={this.state.p1Name} p2Name={this.state.p2Name} />
      </div>
    );
  }
}
export default App;
