import React, { useEffect, useState } from "react";
import Square from "./shared/square/Square";

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [status, setStatus] = useState(`Следующий ход: ${isXNext ? "X" : "O"}`);

  const handleClick = (index) => {
    if (squares[index] || calculateWinner(squares)) return;

    const newSquares = squares.slice();
    newSquares[index] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  useEffect(() => {
    const newWinner = calculateWinner(squares);
    setWinner(newWinner);
  }, [squares]);

  useEffect(() => {
    if (winner) {
      setStatus(`Победитель: ${winner}`);
    } else {
      setStatus(`Следующий ход: ${isXNext ? "X" : "O"}`);
    }
  }, [winner, isXNext]);

  return (
    <div>
      <div className="status">{status}</div>
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="flex">
          {Array.from({ length: 3 }).map((_, j) => (
            <Square
              key={j}
              value={squares[i * 3 + j]}
              onClick={() => handleClick(i * 3 + j)}
            />
            //hello
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;
