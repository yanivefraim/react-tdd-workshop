import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Registration extends Component {
  static propTypes = {
    onNewGame: PropTypes.func.isRequired,
  };
  constructor() {
    super();
    this.state = {
      p1Name: '',
      p2Name: '',
    };
  }
  render() {
    return (
      <div data-hook="registration-form">
        <input onChange={el => this.setState({ p1Name: el.target.value })} data-hook="p1-input" />
        <input onChange={el => this.setState({ p2Name: el.target.value })} data-hook="p2-input" />
        <button
          onClick={() =>
            this.props.onNewGame({ p1Name: this.state.p1Name, p2Name: this.state.p2Name })
          }
          data-hook="new-game"
        >
          New Game
        </button>
      </div>
    );
  }
}
