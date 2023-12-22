import GameBoardImage from "../assets/game-board.svg";
import "./GameBoard.css";

export default function GameBoard({ squareOnSelect, board }) {
	return (
		<div id="game-area">
			<img src={GameBoardImage} id="game-board-img" />
			<div id="buttons-area">
				{board.map((row, rowIndex) => (
					<div key={rowIndex} id="row">
						{row.map((column, columnIndex) => (
							<div key={columnIndex}>
								<button
									onClick={() => squareOnSelect(rowIndex, columnIndex)}
									disabled={column !== null}
									id="game-button">
									<img src={column} id="icon" />
								</button>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
}
