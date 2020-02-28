import React from "react";
import { Link } from "react-router-dom";

export const Menu = props => {
	// Declare a new state variable, which we'll call "count"
	return (
		<nav>
			<Link to="Players">
				<button className="btn btn-warning">Players </button>
			</Link>
			<Link to="Games">
				<button className="btn btn-warning">Games</button>
			</Link>
		</nav>
	);
};
