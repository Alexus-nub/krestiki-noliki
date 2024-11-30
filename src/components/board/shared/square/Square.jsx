import React from "react";
import "./Square.css";

function Square({ value, onClick }) {
  return (
    <button id="board-square" className="pointer text-center" onClick={onClick}>
      {value}
    </button>
  );
}
export default Square;
