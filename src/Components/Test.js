import React, { useState, useEffect } from 'react';

export default function Test() {
	const [acceleration, setAcceleration] = useState(0);
	const [score, setScore] = useState(0);
	const [beta, setBeta] = useState(0);
	const [gamma, setGamma] = useState(0);

	const deviceOrientationHandler = (event) => {
		var x = event.beta;
		var y = event.gamma;
		setBeta(x);
		setGamma(y);
	};

	const handleMotion = (event) => {
		let tempAcceleration = event.acceleration.z;
		setAcceleration(tempAcceleration);
		setScore((prevState) => prevState + 1);

		/* 	if (tempAcceleration > 10) {
			window.removeEventListener('devicemotion', handleMotion, true);
			setScore((prevState) => prevState + 1);
		} */
	};

	window.addEventListener('devicemotion', handleMotion, true);
	window.addEventListener('deviceorientation', deviceOrientationHandler, true);

	return (
		<div>
			<div>acceleration: {acceleration}</div>
			<div>score: {score}</div>
			<div>beta: {beta}</div>
			<div>gamma: {gamma}</div>
		</div>
	);
}
