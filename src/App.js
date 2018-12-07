import React from 'react';
import './App.css';
import Board from './Board.js';

function App () {
  return (
    <div className="app">
        <h1 className="app-title">Tic Tac Toe</h1>
        <Board/>
    </div>
  );
}

export default App;
