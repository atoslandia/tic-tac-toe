import "./Log.css";

export default function Log({ turns }) {
	return (
		<ol>
			{turns.map((turn) => (
				<li key={`${turn.square.row}${turn.square.column}`}>
					<img src={turn.player} id="log-icon" /> selected row {turn.square.row + 1}, column{" "}
					{turn.square.column + 1}
				</li>
			))}
		</ol>
	);
}
