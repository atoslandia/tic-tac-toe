import { useState } from "react";
import "./GameBoard.css";

const initialGameBoard = [
	["select", "select", "select"],
	["select", "select", "select"],
	["select", "select", "select"],
];

export default function GameBoard() {
	const [gameBoard, setGameBoard] = useState(initialGameBoard);

	function selectSquareHandle(rowIndex, columnIndex) {
		setGameBoard((prevGameBoard) => {
			const copyGameBoard = [...prevGameBoard.map((row) => [...row])];
			copyGameBoard[rowIndex][columnIndex] = "X";
			return copyGameBoard;
		});
	}

	return (
		<ol id="top-ol">
			{gameBoard.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((column, columnIndex) => (
							<li key={columnIndex}>
								<button onClick={() => selectSquareHandle(rowIndex, columnIndex)}>{column}</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
}
