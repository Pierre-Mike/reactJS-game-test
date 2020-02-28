import React, { useState, useEffect } from "react";
import "./dice.css";

export const Dice = props => {
	const [css, setCss] = useState();
	const [clickable] = useState(props.clickable || false);
	const [speed] = useState(Math.floor(800 + Math.random() * 2000));
	const [isRolling, setIsRolling] = useState(props.isRolling || false);

	useEffect(() => {
		if (props.throwDice) {
			throwDice();
		}
	}, [props.throwDice]);

	const throwDice = () => {
		console.log(isRolling);
		if (isRolling) return false;
		setIsRolling(true);
		const ANGLE = {
			1: {
				x: -10,
				y: -10,
				z: 0
			},
			2: {
				x: -10,
				y: 260,
				z: 0
			},
			3: {
				x: 80,
				y: 0,
				z: 10
			},
			4: {
				x: 260,
				y: 0,
				z: -10
			},
			5: {
				x: 260,
				y: 0,
				z: 80
			},
			6: {
				x: -10,
				y: 170,
				z: 90
			}
		};

		let val = Math.floor(1 + Math.random() * 6);
		var angleGenerator = () => {
			let { x, y, z } = ANGLE[val];
			return {
				x: x + 3600,
				y: y + 3600,
				z: z + 3600
			};
		};

		let { x, y, z } = angleGenerator();
		setCss({
			WebkitTransform: "none",
			transform: "none"
		});

		setTimeout(() => {
			setCss({
				WebkitTransitionDuration: `${speed}ms`,
				transitionDuration: `${speed} ms`,
				WebkitTransform: `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`,
				transform: `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`
			});
			setTimeout(() => {
				setIsRolling(false);
				props.callback(val);
			}, speed);
		}, 100);
	};

	return (
		<span
			style={{
				width: "75px",
				height: "75px"
			}}
			onClick={() => (clickable ? throwDice() : "")}
		>
			<div className="cubic" style={css}>
				<div className="front" data="1" />
				<div className="right" data="2" />
				<div className="bottom" data="3" />
				<div className="top" data="4" />
				<div className="left" data="5" />
				<div className="back" data="6" />
			</div>
		</span>
	);
};
