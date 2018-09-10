import React, { Component } from 'react';


class Square extends Component {
  render() {
    return (
      <div className="square" onClick={() => this.props.player !== false ? alert('square taken!') : this.props.handleClick(this.props.position)}>
        {this.props.player}
      </div>
    );
  }
}

export default Square;