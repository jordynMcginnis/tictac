import React from 'react';

function Square (props) {
  function handleClick() {
    props.player !== false ? alert('square taken!') : props.handleClick(props.position)
  }

  return (
    <div className="square" onClick={handleClick}>
      {props.player}
    </div>
  );
}

export default Square;