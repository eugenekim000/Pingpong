import React, { useState, useEffect } from 'react';
import { timeout, generateRobotReturnTime } from '../HelperFunctions';
import { playSound } from '../HelperFunctions';
import incoming from '../assets/ball-incoming.mp3';
import outgoing from '../assets/ball-outgoing.mp3';

export default function MainGame(props) {
	const { handleGameOver } = props;
	const [score, setScore] = useState(0);
	const [returned, setReturned] = useState(true);
	const [acceleration, setAcceleration] = useState(0);
	const [firstRender, setRender] = useState(false);
	const [timeoutId, setTimeoutID] = useState(-1);

	const incomingAudio = new Audio(incoming);
	const outgoingAudio = new Audio(outgoing);

	const handleClick = () => {
		//playSound(incomingAudio);
		if (!firstRender) setRender(() => true);
		handleRobot();
		console.log(timeoutId, 'returned in click');
	};

	const handleRobot = async () => {
		const returnTime = generateRobotReturnTime();
		await timeout(returnTime);
		//playSound(outgoingAudio);
		setReturned((prevState) => !prevState);
	};

	useEffect(() => {
		checkIfReturned();
		console.log(timeoutId, 'useeffect');
	}, [returned]);

	const checkIfReturned = () => {
		if (firstRender) {
			window.addEventListener('devicemotion', handleMotion, true);
			setTimeoutID(
				setTimeout(() => {
					console.log('failed to return');
					handleGameOver();
				}, 2000)
			);
		}
	};

	const handleMotion = (event) => {
		console.log(returned, 'handlemotion');

		let tempAcceleration = event.acceleration.z;
		if (tempAcceleration > 10) {
			window.removeEventListener('devicemotion', handleMotion, true);
			clearTimeout(timeoutId);
			setScore((prevState) => prevState + 1);
			handleRobot();

			setAcceleration(tempAcceleration);
		}
	};

	return (
		<div>
			<div>{score}</div>
			{<button onClick={() => handleClick()}>Start!</button>}
		</div>
	);
}
