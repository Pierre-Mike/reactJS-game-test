import React, { useContext, useState } from "react";
import { PlayersContext } from "../../contexts/playersContext";

export const Header = props => {
	const { players } = useContext(PlayersContext);
	const getName = () => (players[0] ? players[0].name : "No Player");

	// Declare a new state variable, which we'll call "count"
	return <header>{getName()}</header>;
};
