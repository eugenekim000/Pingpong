import React, { useState, useEffect } from 'react';
import { timeout, generateReturnTime } from '../HelperFunctions';
import { playSound } from '../HelperFunctions';
import incoming from '../assets/ball-incoming.mp3';
import outgoing from '../assets/ball-outgoing.mp3';

export default function MainGame(props) {
	const { handleGameOver } = props;
	const [score, setScore] = useState(0);
	const [returned, setReturned] = useState(true);
	const [firstRender, setRender] = useState(false);
	const [timeoutId, setTimeoutID] = useState(-1);
	const [showButton, setButton] = useState(true);

	const incomingAudio = new Audio(incoming);
	const outgoingAudio = new Audio(outgoing);

	const handleClick = () => {
		//playSound(incomingAudio);
		setButton(false);
		if (!firstRender) setRender(() => true);
		handleRobot();
	};

	const handleRobot = async () => {
		const robotReturnTime = generateReturnTime(score, 'robot');
		await timeout(robotReturnTime);
		playSound(outgoingAudio);
		setReturned((prevState) => !prevState);
	};

	useEffect(() => {
		checkIfReturned();
	}, [returned]);

	const checkIfReturned = () => {
		if (firstRender) {
			const playerReturnTime = generateReturnTime(score, 'player');
			window.addEventListener('devicemotion', handleMotion, true);
			setTimeoutID(
				setTimeout(() => {
					handleGameOver(score);
				}, 2000)
			);
		}
	};

	const handleMotion = (event) => {
		let tempAcceleration = event.acceleration.z;
		if (tempAcceleration > 10) {
			playSound(incomingAudio);
			window.removeEventListener('devicemotion', handleMotion, true);
			clearTimeout(timeoutId);
			setScore((prevState) => prevState + 1);
			handleRobot();
		}
	};

	const clearTest = () => {
		clearTimeout(timeoutId);
		setScore((prevState) => prevState + 1);
		handleRobot();
	};

	return (
		<div>
			<div className='score'>{score}</div>
			{showButton && <button onClick={() => handleClick()}>Start!</button>}
			<div>{timeoutId}</div>
			<button className='test' onClick={() => clearTest()}>
				clear Timeout
			</button>
		</div>
	);
}
