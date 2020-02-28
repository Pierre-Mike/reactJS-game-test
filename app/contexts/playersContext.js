import { createContext, useReducer, useEffect, useMemo } from "react";
import { PlayerOjb, Player } from "../components/player/player";
import { Players } from "../components/player/players";

export const PLAYERS_ADD = "PLAYERS_ADD";
export const PLAYERS_REMOVE = "PLAYERS_REMOVE";
export const PLAYERS_UPDATE = "PLAYERS_UPDATE";
export const PLAYERS_NEXT_TURN = "PLAYERS_NEXT_TURN";

export const PlayersContext = createContext(() => {
	const [players, dispatch] = useReducer(
		playerReducer,
		JSON.parse(localStorage.getItem("players") || "[]")
	);
	useEffect(() => {
		localStorage.setItem("players", JSON.stringify(players));
	}, [players]);
	return { players, dispatch };
});
const playerReducer = (players, action) => {
	let value = action.value;
	switch (action.type) {
		case PLAYERS_ADD:
			let name = value || `Player No : ${players.length}`;
			return [...players, new PlayerOjb(name)];
		case PLAYERS_REMOVE:
			return players.filter(e => e.idPlayer != value);
		case PLAYERS_UPDATE:
			return players.map(e => (e.idPlayer == value.idPlayer ? value : e));
		case PLAYERS_NEXT_TURN:
			let last = players.pop();
			if (last) players.splice(0, 0,last);
			return [...players];
		default:
			return [...players];
	}
};
