import React, { Component } from 'react';
import './App.css';
import Board from './Board.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Tic Tac Toe</h1>
        </header>
        <div className="app-intro">
          <Board/>
        </div>
      </div>
    );
  }
}

export default App;
