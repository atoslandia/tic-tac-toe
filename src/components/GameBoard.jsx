import { useState } from "react";
import "./GameBoard.css";

const initialGameBoard = [
	["-", "-", "-"],
	["-", "-", "-"],
	["-", "-", "-"],
];

export default function GameBoard({ squareOnSelect, symbolPlayer }) {
	const [gameBoard, setGameBoard] = useState(initialGameBoard);

	function selectSquareHandle(rowIndex, columnIndex) {
		setGameBoard((prevGameBoard) => {
			const copyGameBoard = [...prevGameBoard.map((row) => [...row])];
			copyGameBoard[rowIndex][columnIndex] = symbolPlayer;
			return copyGameBoard;
		});

		squareOnSelect();
	}

	return (
		<div id="game-area">
			{gameBoard.map((row, rowIndex) => (
				<div key={rowIndex} id="row">
					{row.map((column, columnIndex) => (
						<div key={columnIndex}>
							<button onClick={() => selectSquareHandle(rowIndex, columnIndex)} id="game-button">
								{column}
							</button>
						</div>
					))}
				</div>
			))}
		</div>
	);
}
