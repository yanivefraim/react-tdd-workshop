import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      p1Name: '',
      p2Name: '',
    };
  }
  render() {
    return (
      <div className="App">
        <div>
          <input onChange={el => this.setState({ p1Name: el.target.value })} data-hook="p1-input" />
          <input onChange={el => this.setState({ p2Name: el.target.value })} data-hook="p2-input" />
          <button data-hook="new-game">New Game</button>
        </div>
        <div>
          <span data-hook="p1-name">{this.state.p1Name}</span>
          <span data-hook="p2-name">{this.state.p2Name}</span>
        </div>
      </div>
    );
  }
}
export default App;
