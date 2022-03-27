/** @format */
// imrc cc
import React, { Component } from "react";

class Board extends Component {
  handleBoxClick(i) {
    this.props.handlerForBoxClick(i);
  }

  renderSquare(i) {
    return (
      <button onClick={() => this.handleBoxClick(i)}>
        {this.props.boxes[i] == null ? "" : this.props.boxes[i]}
      </button>
    );
  }

  render() {
    return (
      <div className="board">
        <div className="title">Tic Tac Toe</div>
        <div className="content">
          <div className="ttt">
            <div className="row">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </div>
            <div className="row">
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
            </div>
            <div className="row">
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
