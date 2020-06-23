import React, { useState, useEffect } from 'react';
import { timeout, generateRobotReturnTime } from '../HelperFunctions';

let timeouts = [];

export default function MainGame(props) {
	const { handleGameOver } = props;
	const [score, setScore] = useState(0);
	const [returned, setReturned] = useState(true);
	const [playerSwing, setSwing] = useState(true);

	const incomingAudio = new Audio('../public/ball-incoming.mp3');
	const outgoingAudio = new Audio('../public/ball-outgoing.mp3');

	useEffect(() => {
		checkIfReturned();
	}, [returned]);

	const checkIfReturned = () => {
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

	const handleClick = () => {
		handleClearingTimeout(timeouts);
		//handleAudio(outgoingAudio);

		setScore((prevState) => prevState + 1);
		setSwing((prevState) => !prevState);
		setReturned(() => true);
		handleRobot();
	};

	const handleRobot = async () => {
		const returnTime = generateRobotReturnTime();
		await timeout(returnTime);
		setReturned((prevState) => !prevState);
		setSwing((prevState) => !prevState);
	};

	return (
		<div>
			<div>{score}</div>
			{playerSwing && <button onClick={() => handleClick()}>Click me</button>}
			{/* 			{<button onClick={() => handleAudio(outgoingAudio)}>test sound</button>}
			 */}
		</div>
	);
}
