/** @format */
import ReactDom from "react-dom";
import React from "react";
import "./index.css";
import Board from "./components/Board";
import Display from "./components/Display";

function getGameStatus(squares) {
  let winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winCombos.length; i++) {
    let winComb = winCombos[i];
    let s1 = winComb[0];
    let s2 = winComb[1];
    let s3 = winComb[2];
    if (squares[s1] != null) {
      console.log(squares[s1], squares[s2], squares[s3]);
      if (squares[s1] == "X" && squares[s2] == "X" && squares[s3] == "X") {
        return squares[s1];
      }
      if (squares[s1] == "O" && squares[s2] == "O" && squares[s3] == "O") {
        return squares[s1];
      }
    }
  }
  return null;
}

class test extends React.Component {
  render() {
    return <div> hello </div>;
  }
}
class TTT extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      history: [[null, null, null, null, null, null, null, null, null]],
      stepNumber: 0,
      gameStatus: null,
    };
  }

  handleSquareClick(i) {
    let oldHistory = this.state.history.slice();
    let currentSquares = oldHistory[oldHistory.length - 1].slice();

    if (currentSquares[i] != null || this.state.gameStatus != null) {
      return;
    }

    currentSquares[i] = this.state.stepNumber % 2 == 0 ? "X" : "O";
    let newGamestatus = getGameStatus(currentSquares);
    oldHistory.gameStatus = newGamestatus;
    if (newGamestatus != null) {
      console.log("won the game");
    }
    oldHistory.push(currentSquares);

    this.setState({
      history: oldHistory,
      stepNumber: this.state.stepNumber + 1,
      gameStatus: newGamestatus,
    });
  }

  moveToHistory(i) {
    let oldHistory = this.state.history.slice(0, i + 1);
    let currentSquares = oldHistory[oldHistory.length - 1].slice();
    let newGamestatus = getGameStatus(currentSquares);
    this.setState({
      history: oldHistory,
      stepNumber: i,
      gameStatus: newGamestatus,
    });
  }
  render() {
    let squares = this.state.history[this.state.history.length - 1];

    return (
      <>
        <Board
          handlerForBoxClick={(i) => this.handleSquareClick(i)}
          boxes={squares}
        />
        <Display
          handlerForHistory={(i) => this.moveToHistory(i)}
          stepNumber={this.state.stepNumber}
          gameStatus={this.state.gameStatus}
        />
      </>
    );
  }
}
// sir class mei kisi ko panelist bana do

ReactDom.render(<TTT />, document.getElementById("root"));
