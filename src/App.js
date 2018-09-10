import React, { Component } from 'react';
import './App.css';
import Board from './Board.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tic Tac Toe</h1>
        </header>
        <div className="App-intro">
          <Board/>
        </div>
      </div>
    );
  }
}

export default App;
