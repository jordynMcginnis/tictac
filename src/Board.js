import React, { useState } from 'react';
import Square from './Square.js';


function Board () {
  const [board, setBoard] = useState([false, false, false, false, false, false, false, false, false]);
  const [turn, setTurn] = useState('X');
  const [xPoints, setXpoints] = useState(0);
  const [yPoints, setYpoints] = useState(0);

  function handleClick (position) {
    let newBoard = board;
    newBoard[position] = turn;
    let nextTurn = turn === 'X' ? 'Y' : 'X';
    setBoard(newBoard);
    setTurn(nextTurn);
    checkWin();
  }

  function checkWin () {
    let finalWinner = false;

    for (var i = 0; i < board.length; i+= 3){
      if(board[i] !== false){
        if(board[i] === board[i + 1] && board[i] === board[i + 2]){
          finalWinner = board[i];
        }
      }
    }

    for (var j = 0; j < board.length; j++){
      if(board[j] !== false){
        if(board[j] === board[j + 3] && board[j] === board[j + 6]){
          finalWinner = board[j];
        }
      }
    }

    if(board[0] !== false){
      if(board[0] === board[4] && board[0] === board[8]){
          finalWinner = board[0];
      }
    }

    if(board[2] !== false){
      if(board[2] === board[4] && board[2] === board[6]){
          finalWinner = board[2];
      }
    }

    if(finalWinner === 'X'){
      setXpoints(xPoints + 1);
      setBoard([false, false, false, false, false, false, false, false, false]);
      alert(`X is the winner!!  X points: ${xPoints}, Y points: ${yPoints}`);
    } else if (finalWinner === 'Y'){
      setYpoints(yPoints + 1);
      setBoard([false, false, false, false, false, false, false, false, false]);
      alert(`Y is the winner!!  X points: ${xPoints}, Y points: ${yPoints}`);
    }
  }

  return (
    <div className="board">
      {board.map((player, index) => (
        <Square player={player} handleClick={handleClick} position={index} key={index}/>
      ))}
    </div>
  );
}

export default Board;