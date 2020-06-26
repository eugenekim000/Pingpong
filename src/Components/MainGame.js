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
	const [showButton, setButton] = useState(true);

	let timeoutId = null;

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
		await playSound(outgoingAudio);
		setReturned((prevState) => !prevState);
	};

	useEffect(() => {
		window.addEventListener('devicemotion', handleMotion, true);
		checkIfReturned();
		return () => window.removeEventListener('devicemotion', handleMotion, true);
	}, [returned]);

	const checkIfReturned = () => {
		if (firstRender) {
			const playerReturnTime = generateReturnTime(score, 'player');
			timeoutId = setTimeout(() => {
				window.removeEventListener('devicemotion', handleMotion, true);
				handleGameOver(score);
			}, playerReturnTime);
		}
	};

	const handleMotion = async (event) => {
		let tempAcceleration = event.acceleration.z;
		if (tempAcceleration > 10) {
			window.removeEventListener('devicemotion', handleMotion, true);
			clearTimeout(timeoutId);
			setScore((prevState) => prevState + 1);
			await playSound(incomingAudio);

			handleRobot();
		}
	};

	const clearTest = async () => {
		clearTimeout(timeoutId);
		setScore((prevState) => prevState + 1);
		await playSound(incomingAudio);

		handleRobot();
	};

	useEffect(() => {
		setButton(false);
		if (!firstRender) setRender(() => true);
		handleRobot();
	}, []);

	return (
		<div>
			<div className='score'>{score}</div>
			{showButton && <button onClick={() => handleClick()}>Start!</button>}
			<div>{timeoutId}</div>
			{/* 			<button className='test' onClick={() => clearTest()}>
				clear Timeout
			</button> */}
		</div>
	);
}
