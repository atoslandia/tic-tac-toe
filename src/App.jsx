import "./App.css";
import xIcon from "./assets/x-icon.svg";
import circleIcon from "./assets/circle-icon.svg";

function App() {
	return (
		<>
			<main>
				<div id="game-container">
					<div id="player-one">
						<h1>Player one</h1>
						<img src={xIcon} alt="" />
					</div>
					<div id="player-two">
						<h1>Player two</h1>
						<img src={circleIcon} alt="" />
					</div>
				</div>
			</main>
			<p>Coming on...</p>
		</>
	);
}

export default App;
