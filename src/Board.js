import React, { useState } from "react";
import Square from "./Square";

function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    const handleClick = (index) => {
        if (squares[index] || calculateWinner(squares)) return;

        const newSquares = squares.slice();
        newSquares[index] = isXNext ? "X" : "O";
        setSquares(newSquares);
        setIsXNext(!isXNext);
    };

    const renderSquare = (index) => (
        <Square value={squares[index]} onClick={() => handleClick(index)} />
    );

    const winner = calculateWinner(squares);
    const status = winner
        ? `Победитель: ${winner}`
        : `Следующий ход: ${isXNext ? "X" : "O"}`;

    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}

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

export default Board;
