import React, { useReducer } from "react";
import { Dice } from "../components/dice/dice";
import "./diceGame.css";

export const DICES_ADD = "DICES_ADD";
export const DICES_REMOVE = "DICES_REMOVE";
export const DICES_THROW_ALL = "DICES_THROW_ALL";
export const DICES_THROW_ONE = "DICES_THROW_ONE";
export const DICES_STOP_THROWING_ONE = "DICES_STOP_THROWING_ONE";

export const DiceGame = props => {
	// Declare a new state variable, which we'll call "count"
	const [dices, dispatchDices] = useReducer(reducerDices, []);
	const hiddenThrow = () => dices.filter(e => e.throwDice).length != 0;
	return (
		<div className="diceGame game">
			number
			<button
				className="btn btn-primary"
				onClick={e => dispatchDices({ type: DICES_REMOVE })}
			>
				-
			</button>
			<span className="badge badge-secondary">
				<h3>{dices.length || 0}</h3>
			</span>
			<button
				className="btn btn-primary"
				onClick={e => dispatchDices({ type: DICES_ADD })}
			>
				+
			</button>{" "}
			<button
				className="btn btn-warning"
				onClick={e => dispatchDices({ type: DICES_THROW_ALL })}
				hidden={hiddenThrow()}
			>
				throwDice
			</button>
			<div className="dices">
				{dices.map((props, i) => (
					<Dice
						key={i}
						{...props}
						callback={e =>
							dispatchDices({
								type: DICES_STOP_THROWING_ONE,
								index: i,
								value: e
							})
						}
					/>
				))}
			</div>
		</div>
	);
};
const reducerDices = (dices, action) => {
	console.log(action.type);
	switch (action.type) {
		case DICES_ADD:
			return [
				...dices,
				{
					throwDice: false
				}
			];
		case DICES_REMOVE:
			dices.pop();
			return [...dices];
		case DICES_THROW_ALL:
			return [...dices].map((e, i) => ({
				...e,
				throwDice: !e.throwDice
			}));
		case DICES_STOP_THROWING_ONE:
			return [...dices].map((e, i) =>
				action.index == i ? { ...e, throwDice: false } : e
			);
		default:
			return [dices];
	}
};
