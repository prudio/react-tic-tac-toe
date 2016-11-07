import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Game } from './tictactoe';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Tic Tac Toe</h2>
        </div>
        <div className='game-container'>
          <Game />
        </div>
      </div>
    );
  }
}

export default App;
