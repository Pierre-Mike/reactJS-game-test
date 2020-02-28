import React, { useState, useEffect, useContext } from "react";
import "./player.css";

import {
	PlayersContext,
	PLAYERS_UPDATE,
	PLAYERS_REMOVE
} from "../../contexts/playersContext";
import { animateCss } from "../utils/anim";

export function PlayerOjb(
	name,
	score = 0,
	idPlayer = "_" +
		Math.random()
			.toString(36)
			.substr(2, 9)
) {
	this.name = name;
	this.score = score;
	this.idPlayer = idPlayer;
}

export const Player = props => {
	const [name, setName] = useState(props.name);
	const [score, setScore] = useState(props.score);
	const [idPlayer] = useState(props.idPlayer);
	const { dispatch } = useContext(PlayersContext);

	useEffect(() => {
		dispatch({
			type: PLAYERS_UPDATE,
			value: { name, score, idPlayer }
		});
	}, [name, score]);
	const remove = e => {
		animateCss(`#${idPlayer}`, "flipOutX", () =>
			dispatch({
				type: PLAYERS_REMOVE,
				value: idPlayer
			})
		);
	};
	return (
		<div className={`player animated flipInX`} id={idPlayer}>
			<input
				value={name}
				onChange={e => {
					setName(e.target.value);
				}}
			/>
			<span className="score">
				<ButtonMinusAndPlus set={setScore} value={score} />
			</span>
			<button
				className="delete btn btn-danger"
				id={props.idPlayer}
				onClick={remove}
			>
				✕
			</button>
		</div>
	);
};

export const ButtonMinusAndPlus = props => (
	<>
		<button
			className="btn btn-primary"
			onClick={() => props.set(props.value - 1)}
		>
			-
		</button>
		<span className="badge badge-secondary">
			<h3>{props.value}</h3>
		</span>
		<button
			className="btn btn-primary"
			onClick={() => props.set(props.value + 1)}
		>
			+
		</button>
	</>
);
