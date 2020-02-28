import React, { useReducer, useEffect, useState, useContext } from "react";
import { Dice } from "../components/dice/dice";
import { PlayersContext, PLAYERS_NEXT_TURN } from "../contexts/playersContext";
import { animateCss, Animate } from "../components/utils/anim";
export const DICES_THROW_ALL = "DICES_THROW_ALL";
export const DICES_STOP_THROWING_ONE = "DICES_STOP_THROWING_ONE";

export function Game71421() {
	// Declare a new state variable, which we'll call "count"
	const initGame = {
		count: 0,
		dices: Array(5).fill({
			throwDice: false,
			value: 1
		})
	};
	const [{ count, dices }, dispatchDices] = useReducer(reducer71421, initGame);
	const { players, dispatch } = useContext(PlayersContext);

	const hiddenThrow = () => dices.filter(e => e.throwDice).length != 0;
	const nextPlayer = () =>
		!hiddenThrow() && dices.filter(e => e.value == 1).length == 0;
	useEffect(() => {
		if (nextPlayer()) {
			dispatch({ type: PLAYERS_NEXT_TURN });
		}
	}, [dices]);

	return (
		<div
			className="game71421 game"
			onTouchEnd={e => {
				if (!hiddenThrow()) dispatchDices({ type: DICES_THROW_ALL });
			}}
		>
			COUNT:{count}
			<div className="dices">
				{dices.map((props, i) => (
					<Dice
						className={"animated rollIn"}
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
			<Animate in="bounceIn" out="bounceOut" anim={nextPlayer()}>
				<div className="alert alert-info" role="alert">
					Turn to :{players[0] ? players[0].name : "Next"}
				</div>
			</Animate>
		</div>
	);
}
const reducer71421 = (state, action) => {
	console.log(action.type);
	let { count, dices } = state;
	switch (action.type) {
		case DICES_THROW_ALL:
			dices = [...dices].map((e, i) => ({
				...e,
				throwDice: !e.throwDice
			}));
			return { count, dices };
		case DICES_STOP_THROWING_ONE:
			dices = [...dices].map((e, i) =>
				action.index == i ? { ...e, throwDice: false, value: action.value } : e
			);
			let prevCount = count;
			count += action.value == 1 ? 1 : 0;
			if (prevCount < 7 && count >= 7) {
				alert("ORDER");
			} else if (prevCount < 14 && count >= 14) {
				alert("DRINK");
			} else if (prevCount < 21 && count >= 21) {
				alert("PAY");
			}
			return { count, dices };
		default:
			return { count, dices };
	}
};
