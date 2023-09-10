import React, { Component } from "react";
import Board from "./components/Board";

export default class App extends Component {
  render() {
    return (
      <div className="game">
        <div className="game-board"></div>
        <div className="game-info">
          <div>
            <Board />
          </div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
