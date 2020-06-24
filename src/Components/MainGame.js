import React, { useState, useEffect } from 'react';
import { timeout, generateRobotReturnTime } from '../HelperFunctions';

let timeouts = [];

export default function MainGame(props) {
	const { handleGameOver } = props;
	const [score, setScore] = useState(0);
	const [returned, setReturned] = useState(true);
	const [canSwing, setCanSwing] = useState(true);
	const [acceleration, setAcceleration] = useState('');

	const handleMotion = (event) => {
		/* 		let tempAcceleration = event.acceleration.z;
		if (tempAcceleration > acceleration) {
			setAcceleration(tempAcceleration);
		} */

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

	//const incomingAudio = new Audio('../public/ball-incoming.mp3');
	//const outgoingAudio = new Audio('../public/ball-outgoing.mp3');

	useEffect(() => {
		console.log(canSwing, 'use Effect');

		checkIfReturned();
		//window.removeEventListener('devicemotion', handleMotion, true);
	}, [returned]);

	const checkIfReturned = () => {
		console.log(canSwing, 'check if returned');

		window.addEventListener('devicemotion', handleMotion, true);

		timeouts.push(
			setTimeout(() => {
				if (returned === false) {
					console.log('failed to return');
					handleGameOver();
				}
			}, 2000)
		);
	};

	const handleClearingTimeout = (timeouts) => {
		clearTimeout(timeouts[timeouts.length - 1]);
		timeouts.pop();
	};

	const handleRobot = async () => {
		const returnTime = generateRobotReturnTime();
		window.removeEventListener('devicemotion', handleMotion, true);
		setCanSwing((prevState) => !prevState);
		await timeout(returnTime);
		setReturned((prevState) => !prevState);
		console.log(canSwing, 'handlerobot');
	};

	const handleClick = () => {
		//handleClearingTimeout(timeouts);
		//handleAudio(outgoingAudio);

		//setScore((prevState) => prevState + 1);
		//setSwing((prevState) => !prevState);
		//setReturned(() => true);
		handleRobot();
	};

	return (
		<div>
			<div>{acceleration}</div>
			<div>{score}</div>
			{canSwing && <button onClick={() => handleClick()}>Click me</button>}
			{/* 			{<button onClick={() => handleAudio(outgoingAudio)}>test sound</button>}
			 */}
			<button onClick={(e) => console.log(window.DeviceMotionEvent)}>
				test
			</button>

			<div>{}</div>
		</div>
	);
}
