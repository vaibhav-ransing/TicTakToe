/** @format */

import React, { Component } from "react";

class Display extends Component {
  moveToHistory(i) {
    this.props.handlerForHistory(i);
  }
  render() {
    let gameTitle = null;

    if (this.props.gameStatus != null) {
      gameTitle = this.props.gameStatus + " wins";
    } else {
      if (this.props.stepNumber % 2 == 0) {
        gameTitle = "Next move for X";
      } else {
        gameTitle = "Next move for O";
      }
    }

    let buttons = [];
    for (let i = 0; i <= this.props.stepNumber; i++) {
      let button = null;

      if (i == 0) {
        button = (
          <button key={i} onClick={() => this.moveToHistory(i)}>
            Go to Start
          </button>
        );
      } else {
        button = (
          <button key={i} onClick={() => this.moveToHistory(i)}>
            Go to step number {i}
          </button>
        );
      }

      buttons.push(button);
    }

    return (
      <div className="display">
        <div className="title">{gameTitle}</div>
        <div className="content">
          <div className="history">{buttons}</div>
        </div>
      </div>
    );
  }
}

export default Display;
