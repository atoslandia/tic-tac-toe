import "./App.css";
import xIcon from "./assets/x-icon.svg";
import circleIcon from "./assets/circle-icon.svg";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";

import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

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

function winnerDerive(gameBoard) {
	let winner;

	for (const combination of WINNING_COMBINATIONS) {
		const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
		const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
		const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

		if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
			winner = firstSquareSymbol;
		}
	}

	return winner;
}

function gameBoardDerive(gameTurns) {
	let gameBoard = [...initialGameBoard.map((array) => [...array])];

	for (const turn of gameTurns) {
		const { square, player } = turn;
		const { row, column } = square;

		gameBoard[row][column] = player;
	}

	return gameBoard;
}

function App() {
	const [namePlayers, setNamePlayers] = useState({
		xIcon: "Player one",
		circleIcon: "Player two",
	});
	const [gameTurns, setGameTurns] = useState([]);

	const activePlayer = deriveTurnPlayer(gameTurns);
	const gameBoard = gameBoardDerive(gameTurns);
	const winner = winnerDerive(gameBoard);
	const noWinner = gameTurns.length === 9 && !winner;

	function selectSquareHandle(rowIndex, columnIndex) {
		setGameTurns((prevTurns) => {
			let currentPlayer = deriveTurnPlayer(prevTurns);

			const copyLogTurns = [{ square: { row: rowIndex, column: columnIndex }, player: currentPlayer }, ...prevTurns];

			return copyLogTurns;
		});
	}

	function rematchHandle() {
		setGameTurns([]);
	}

	return (
		<>
			<main>
				<div id="players">
					<Player initialName={"Player one"} symbol={xIcon} isTurn={activePlayer === xIcon && !winner} />
					<Player initialName={"Player two"} symbol={circleIcon} isTurn={activePlayer === circleIcon && !winner} />
				</div>
				<div id="game-board">
					{winner || noWinner ? (
						<GameOver winner={winner} onClick={rematchHandle} />
					) : (
						<GameBoard squareOnSelect={selectSquareHandle} board={gameBoard} />
					)}
				</div>
				<Log turns={gameTurns} />
			</main>
		</>
	);
}

export default App;
