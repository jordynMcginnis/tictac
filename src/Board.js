import React, { Component } from 'react';
import Square from './Square.js';

class Board extends Component {
  constructor(props){
    super(props);
    this.state = {
      board : [false, false, false, false, false, false, false, false, false],
      turn : 'X',
      winner: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.checkWin = this.checkWin.bind(this);
  }
  handleClick (position) {
    let newBoard = this.state.board;
    newBoard[position] = this.state.turn;
    let nextTurn = this.state.turn === 'X' ? 'Y' : 'X';
    this.setState(() => ({board: newBoard, turn: nextTurn}));
    this.checkWin();
  }
  checkWin () {
    const board = this.state.board;
    let winner = false;
    for (var i = 0; i < board.length; i+= 3){
      if(board[i] !== false){
        if(board[i] === board[i + 1] && board[i] === board[i + 2]){
          winner = board[i];
        }
      }
    }
    for (var j = 0; j < board.length; j++){
      if(board[j] !== false){
        if(board[j] === board[j + 3] && board[j] === board[j + 6]){
          winner = board[j];
        }
      }
    }
    if(board[0] !== false){
      if(board[0] === board[4] && board[0] === board[8]){
          winner = board[0];
      }
    }
    if(board[2] !== false){
      console.log(true)
      if(board[2] === board[4] && board[2] === board[6]){
          winner = board[2];
      }
    }
    if(winner !== false){
      console.log('winner', winner)
      alert('winner')
      this.setState(() => ({winner}))
    }
  }
  render() {
    return (
      <div className="board">
        {this.state.board.map((player, index) => (
          <Square player={player} handleClick={this.handleClick} position={index} key={index}/>
        ))}
      </div>
    );
  }
}

export default Board;