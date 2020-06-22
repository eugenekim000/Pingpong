import React, { useState, useEffect } from 'react';

function useDeviceOrientation() {
	const [deviceOrientation, setDeviceOrientation] = useState({
		absolute: false,
		alpha: null,
		beta: null,
		gamma: null,
	});

	function handleDeviceOrientation(event) {
		setDeviceOrientation({
			absolute: event.absolute,
			alpha: event.alpha,
			beta: event.beta,
			gamma: event.gamma,
		});
	}

	useEffect(() => {
		window.addEventListener('deviceorientation', handleDeviceOrientation, true);

		return () => {
			window.removeEventListener('deviceorientation', handleDeviceOrientation);
		};
	}, []);

	return deviceOrientation;
}

export default function MainGame() {
	const [score, setScore] = useState(0);
	let value = useDeviceOrientation();

	/* 	const [deviceOrientation, setDeviceOrientation] = useState({
		absolute: false,
		alpha: null,
		beta: null,
		gamma: null,
	});

	useEffect(() => {
		window.addEventListener('deviceorientation', handleDeviceOrientation, true);

		return () => {
			window.removeEventListener('deviceorientation', handleDeviceOrientation);
		};
	}, []);

	function handleDeviceOrientation(event) {
		let { absolute, alpha, beta, gamma } = { event };
		setDeviceOrientation({
			absolute,
			alpha,
			beta,
			gamma,
		});
	} */

	function handleClick() {
		setScore((prevState) => prevState + 1);
	}

	return (
		<div>
			<div>{score}</div>
			<p>Absolute: {value.absolute}</p>
			<p>Alpha: {value.alpha}</p>
			<p>Beta: {value.beta}</p>
			<p>Gamma: {value.gamma}</p>
		</div>
	);
}
