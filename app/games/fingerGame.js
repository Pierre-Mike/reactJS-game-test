import React, { useReducer, useEffect, useState, useContext } from "react";
import { PlayersContext, PLAYERS_NEXT_TURN } from "../contexts/playersContext";
import { animateCss, Animate } from "../components/utils/anim";
import { timeout } from "q";

export function FingerGame() {
	const { players, dispatch } = useContext(PlayersContext);
	const [count, setCount] = useState(0);
	const [timer, setTimer] = useState(0);
	const { game, dispatchFinger } = useReducer(fingerGameReducer, null);
	const updateTouch = e => {
		if (timer != 0) {
			setCount(e.touches.length);
		}
	};

	useEffect(() => {
		if (timer != 0) {
			setTimeout(() => {
				setTimer(timer - 1);
			}, 1000);
		}
	}, [timer]);

	const showTimer = timer => {
		if (timer - 1 < 0) return count;
		if (timer - 1 == 0) return "...";
		return timer - 1;
	};
	return (
		<div
			className="fingergame game"
			onTouchStart={updateTouch}
			onTouchEnd={updateTouch}
		>
			<button className="btn btn-info" onClick={e => setTimer(3 + 1)}>
				start
			</button>
			<span className="badge-danger" hidden={timer != 0}>
				{count}
			</span>
			<div className={"timer middle"}>
				<div className="middle" style={{ fontSize: "10em" }}>
					<div>{showTimer(timer)}</div>
				</div>
			</div>
		</div>
	);
}
const fingerGameReducer = (state, action) => {
	return state;
};
