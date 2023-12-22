import "./App.css";
import xIcon from "./assets/x-icon.svg";
import circleIcon from "./assets/circle-icon.svg";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";

import { WINNING_COMBINATIONS } from "./winning-combinations";

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

function deriveTurnPlayer(gameTurn) {
	let currentPlayer = xIcon;

	if (gameTurn.length > 0 && gameTurn[0].player === xIcon) {
		currentPlayer = circleIcon;
	}

	return currentPlayer;
}

function App() {
	const [gameTurns, setLogTurns] = useState([]);

	const activePlayer = deriveTurnPlayer(gameTurns);

	let gameBoard = initialGameBoard;

	for (const turn of gameTurns) {
		const { square, player } = turn;
		const { row, column } = square;

		gameBoard[row][column] = player;
	}

	let winner;

	for (const combination of WINNING_COMBINATIONS) {
		const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
		const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
		const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

		if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
			winner = firstSquareSymbol;
		}
	}

	function selectSquareHandle(rowIndex, columnIndex) {
		setLogTurns((prevTurns) => {
			let currentPlayer = deriveTurnPlayer(prevTurns);

			const copyLogTurns = [{ square: { row: rowIndex, column: columnIndex }, player: currentPlayer }, ...prevTurns];

			return copyLogTurns;
		});
	}

	return (
		<>
			<main>
				<div id="players">
					<Player initialName={"Player one"} symbol={xIcon} isTurn={activePlayer === xIcon} />
					<Player initialName={"Player two"} symbol={circleIcon} isTurn={activePlayer === circleIcon} />
				</div>
				<div id="game-board">
					{winner ? (
						<>
							<img src={winner} />
							<h1>Venceu!</h1>
						</>
					) : (
						<GameBoard squareOnSelect={selectSquareHandle} board={gameBoard} />
					)}

					<Log turns={gameTurns} />
				</div>
			</main>
		</>
	);
}

export default App;
