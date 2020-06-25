import React, { useState, useEffect } from 'react';
import { timeout, generateRobotReturnTime } from '../HelperFunctions';
import { playSound } from '../HelperFunctions';
import incoming from '../assets/ball-incoming.mp3';
import outgoing from '../assets/ball-outgoing.mp3';

let timeouts = [];

export default function MainGame(props) {
	const { handleGameOver } = props;
	const [score, setScore] = useState(0);
	const [returned, setReturned] = useState(true);
	const [acceleration, setAcceleration] = useState('');
	const [firstRender, setRender] = useState(false);

	const incomingAudio = new Audio(incoming);
	const outgoingAudio = new Audio(outgoing);

	const handleClick = () => {
		playSound(incomingAudio);
		if (!firstRender) setRender(() => true);
		handleRobot();
	};

	const handleRobot = async () => {
		const returnTime = generateRobotReturnTime();
		await timeout(returnTime);
		//playSound(outgoingAudio);
		setReturned((prevState) => !prevState);
	};

	useEffect(() => {
		checkIfReturned();
	}, [returned]);

	const checkIfReturned = () => {
		if (firstRender) {
			window.addEventListener('devicemotion', handleMotion, true);
		}

		timeouts.push(
			setTimeout(() => {
				if (returned === false) {
					console.log('failed to return');
					handleGameOver();
				}
			}, 2000)
		);
	};

	const handleMotion = (event) => {
		let tempAcceleration = event.acceleration.z;
		if (tempAcceleration > 15) {
			window.removeEventListener('devicemotion', handleMotion, true);
			handleClearingTimeout(timeouts);
			setAcceleration(tempAcceleration);
			setScore((prevState) => prevState + 1);
			setReturned(() => true);
			handleRobot();
		}
	};

	const handleClearingTimeout = (timeouts) => {
		clearTimeout(timeouts[timeouts.length - 1]);
		timeouts.pop();
	};

	return (
		<div>
			<div>{acceleration}</div>
			<div>{score}</div>
			{<button onClick={() => handleClick()}>Click me</button>}
		</div>
	);
}
