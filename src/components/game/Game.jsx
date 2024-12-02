import React from "react";
import Board from "../board/Board";

function Game() {
  return (
    <div className="flex column align-center">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}

export default Game;
