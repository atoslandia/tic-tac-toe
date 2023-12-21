import "./App.css";
import xIcon from "./assets/x-icon.svg";
import circleIcon from "./assets/circle-icon.svg";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";

function App() {
	const [logTurns, setLogTurns] = useState([]);
	const [playerTurn, setPlayerTurn] = useState("X");

	function selectSquareHandle(rowIndex, columnIndex) {
		setPlayerTurn((curTurnPlayer) => (curTurnPlayer === "X" ? "O" : "X"));
		setLogTurns((prevTurns) => {
			let currentPlayer = "X";

			if (prevTurns.length > 0 && prevTurns[0].player === "X") {
				currentPlayer = "O";
			}

			const copyLogTurns = [{ square: { row: rowIndex, column: columnIndex }, player: currentPlayer }, ...prevTurns];
		});
	}

	return (
		<>
			<main>
				<div id="players">
					<Player initialName={"Player one"} symbol={xIcon} isTurn={playerTurn === "X"} />
					<Player initialName={"Player two"} symbol={circleIcon} isTurn={playerTurn === "O"} />
				</div>
				<div id="game-board">
					<GameBoard squareOnSelect={selectSquareHandle} symbolPlayer={playerTurn} />
				</div>
			</main>
			<Log />
		</>
	);
}

export default App;
