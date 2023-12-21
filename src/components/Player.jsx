import "./Player.css";
import { useState } from "react";

export default function Player({ initialName, symbol }) {
	const [playerName, setPlayerName] = useState(initialName);
	const [isEditing, setIsEditing] = useState(false);

	function editOnClick() {
		setIsEditing(true);
	}
	function saveOnClick() {
		setIsEditing(false);
	}

	let nameTitle = <h1>{playerName}</h1>;
	let buttonCaption = <button onClick={() => editOnClick()}>Edit</button>;

	function onChange(event) {
		setPlayerName(event.target.value);
	}

	if (isEditing) {
		buttonCaption = <button onClick={() => saveOnClick()}>Save</button>;
		nameTitle = <input type="text" required defaultValue={playerName} onChange={onChange} />;
	}

	return (
		<div id="player">
			{buttonCaption}
			{nameTitle}
			<img src={symbol} />
		</div>
	);
}
