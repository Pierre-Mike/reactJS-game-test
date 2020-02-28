import React, { useEffect, useState } from "react";
import "animate.css";
export const animateCss = (element, animationName, callback) => {
	const node = document.querySelector(element);
	node.classList.add("animated", animationName);
	node.addEventListener("animationend", handleAnimationEnd);

	function handleAnimationEnd() {
		node.classList.remove("animated", animationName);
		node.removeEventListener("animationend", handleAnimationEnd);

		if (typeof callback === "function") callback();
	}
};

export const Animate = props => {
	const id = "animate";
	const [hide, setHide] = useState(true);

	useEffect(() => {
		if (props.anim) {
			setHide(false);
			animateCss(`#${id}`, props.in, () => {
				if (props.out != undefined) {
					if (props.out == "") {
						setHide(true);
						if (typeof props.callback === "function") callback();
					} else {
						animateCss(`#${id}`, props.out, () => {
							setHide(true);
							if (typeof props.callback === "function") callback();
						});
					}
				} else {
					if (typeof props.callback === "function") callback();
				}
			});
		}
	}, [props.anim]);

	return (
		<div id={id} hidden={hide}>
			{props.children}
		</div>
	);
};
