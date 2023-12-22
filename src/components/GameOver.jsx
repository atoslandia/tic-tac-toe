import "./GameOver.css";

export default function GameOver({ winner, onClick }) {
	return (
		<div id="game-over">
			<h1>Game over</h1>
			{winner && (
				<p>
					<img src={winner} /> is the winner
				</p>
			)}
			<button onClick={onClick}>Remach</button>
		</div>
	);
}
