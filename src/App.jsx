import "./App.css";
import xIcon from "./assets/x-icon.svg";
import circleIcon from "./assets/circle-icon.svg";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
	return (
		<>
			<main>
				<div id="players">
					<Player initialName={"Player one"} symbol={xIcon} />
					<Player initialName={"Player two"} symbol={circleIcon} />
				</div>
				<div id="game-board">
					<GameBoard />
				</div>
			</main>
			<p>Coming on...</p>
		</>
	);
}

export default App;
