import React, { useContext } from "react";
import { Player } from "./player";
import {
	PlayersContext,
	PLAYERS_ADD,
	PLAYERS_NEXT_TURN
} from "../../contexts/playersContext";

export const Players = props => {
	const { players, dispatch } = useContext(PlayersContext);

	return (
		<div className="players">
			<button
				className={"btn btn-primary"}
				onClick={e => dispatch({ type: PLAYERS_NEXT_TURN })}
			>
				NEXT
			</button>
			<button
				className="btn btn-success"
				onClick={e => {
					dispatch({ type: PLAYERS_ADD });
				}}
			>
				+
			</button>
			<div className="players-list">
				{players.map((props, i) => (
					<Player {...props} key={props.idPlayer} />
				))}
			</div>
		</div>
	);
};
