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
    const arr = this.state.board;
    let winner = false;
    for (var i = 0; i < arr.length; i+= 3){
      //console.log(`row: ${i} first square: ${arr[i]}, second square: ${arr[i + 3]}, third square: ${arr[i + 6]}`)
      if(arr[i] !== false){
        if(arr[i] === arr[i + 1] && arr[i] === arr[i + 2]){
          winner = arr[i];
        }
      }
    }
    for (var j = 0; j < arr.length; j++ ){
      //console.log(`row: ${i} first square: ${arr[i]}, second square: ${arr[i + 3]}, third square: ${arr[i + 6]}`)
      if(arr[j] !== false){
        if(arr[j] === arr[j + 3] && arr[j] === arr[j + 6]){
          winner = arr[j];
        }
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