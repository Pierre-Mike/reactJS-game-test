import React from "react";
import { Link } from "react-router-dom";

export const GamesPage = props => {
	return (
		<nav className="gameList">
			<div className="gameRow">
				71421
				<Link to="71421">
					<button className="btn btn-danger">Play</button>
				</Link>
			</div>
			<div className="gameRow">
				DiceGame
				<Link to="DiceGame">
					<button className="btn btn-danger">Play</button>
				</Link>
			</div>
			<div className="gameRow">
				FingerGame
				<Link to="FingerGame">
					<button className="btn btn-danger">Play</button>
				</Link>
			</div>
		</nav>
	);
};
