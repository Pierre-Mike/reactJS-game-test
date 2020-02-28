import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./style.css";

import "bootstrap/dist/css/bootstrap.css";

import { PlayersContext } from "./contexts/playersContext";
import { PlayersPage } from "./pages/playersPage";
import { Header } from "./components/layout/header";
import { Footer } from "./components/layout/footer";
import { GamesPage } from "./pages/gamesPage";
import { Game71421 } from "./games/games71421";
import { DiceGame } from "./games/diceGame";
import { FingerGame } from "./games/fingerGame";

export function App() {
	// Declare a new state variable, which we'll call "count"
	return (
		<PlayersContext.Provider value={PlayersContext._currentValue()}>
			<div className="App">
				<Header />
				<main>
					<Switch>
						<Route path="/Games" component={GamesPage} />
						<Route path="/71421" component={Game71421} />
						<Route path="/Players" component={PlayersPage} />
						<Route path="/DiceGame" component={DiceGame} />
						<Route path="/FingerGame" component={FingerGame} />
					</Switch>
				</main>

				<Footer />
			</div>
		</PlayersContext.Provider>
	);
}

const root = document.getElementById("root");
ReactDom.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	root
);
