import React, { useState, useEffect } from "react";

export function SecondsCounter() {
	const [seconds, setSeconds] = useState(0);
	const [isRunning, setIsRunning] = useState(false);

	let firstDigit = Math.floor(seconds / 1) % 10;
	let secondDigit = Math.floor(seconds / 10) % 10;
	let thirdDigit = Math.floor(seconds / 100) % 10;

	useEffect(
		() => {
			if (isRunning) {
				const id = setInterval(() => {
					setSeconds(seconds => seconds + 1);
				}, 1000);
				return () => clearInterval(id); //call clearInterval on second render and stops setInterval
			}
		},
		[isRunning] // render when isRunning changes
	);

	return (
		<div className="container">
			<div className="mainBox">
				<div className="clock">
					<i className="far fa-clock" />
				</div>
				<div className="three">{thirdDigit}</div>
				<div className="two">{secondDigit}</div>
				<div className="one">{firstDigit}</div>
			</div>
			<div className="buttons">
				<button
					className="play-pause"
					onClick={() => {
						setIsRunning(true);
					}}>
					<i className="far fa-play-circle" />
				</button>
				<button
					className="play-pause"
					onClick={() => {
						setIsRunning(false);
					}}>
					<i className="far fa-pause-circle" />
				</button>
			</div>
		</div>
	);
}
