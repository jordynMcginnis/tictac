import React, { Component } from 'react';
import Square from './Square.js';

class Board extends Component {
  constructor(props){
    super(props);
    this.state = {
      board : [false, false, false, false, false, false, false, false, false],
      turn : 'X',
      winner: false,
      xPoints: 0,
      yPoints: 0
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
      if(board[2] === board[4] && board[2] === board[6]){
          winner = board[2];
      }
    }

    if(winner === 'X'){
      let newpoint = this.state.xPoints + 1;
      this.setState(() => ({winner : winner, xPoints : newpoint, board : [false, false, false, false, false, false, false, false, false]}))
      alert(`X is the winner!!  X points: ${newpoint}, Y points: ${this.state.yPoints}`)
    } else if (winner === 'Y'){
      let newpoint = this.state.yPoints + 1;
      this.setState(() => ({winner : winner, yPoints : newpoint, board : [false, false, false, false, false, false, false, false, false]}))
      alert(`Y is the winner!!  X points: ${this.state.xPoints}, Y points: ${newpoint}`)
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