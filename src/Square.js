import React, { Component } from 'react';


class Square extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.player !== false ? alert('square taken!') : this.props.handleClick(this.props.position)
  }
  render() {
    return (
      <div className="square" onClick={this.handleClick}>
        {this.props.player}
      </div>
    );
  }
}

export default Square;