import React, { useState, useEffect } from 'react';

let timeouts = [];

export default function MainGame(props) {
	const { handleGameOver } = props;
	const [score, setScore] = useState(0);
	const [returned, setReturned] = useState(true);
	const [playerSwing, setSwing] = useState(false);

	useEffect(() => {
		const returnTime = generateRobotReturnTime();

		setTimeout(() => {
			setReturned((prevState) => !prevState);
			setSwing((prevState) => !prevState);
			checkIfReturned();
		}, returnTime);
	}, [score]);

	function checkIfReturned() {
		timeouts.push(
			setTimeout(() => {
				if (returned === false) {
					console.log('failed to return');
					handleGameOver();
				}
			}, 2000)
		);
		console.log('checking', timeouts);
	}

	function handleClearTimeout(timeouts) {
		console.log(timeouts);

		for (let i = timeouts.length - 1; i > 0; i--) {
			console.log('cleared');
			clearTimeout(timeouts[i]);
			timeouts.pop();
		}
	}

	function handleClick() {
		console.log(timeouts, 'timeout before');
		handleClearTimeout(timeouts);
		setScore((prevState) => prevState + 1);
		setSwing((prevState) => !prevState);
	}

	function generateRobotReturnTime() {
		return Math.round(Math.random() * 200) + 600;
	}

	return (
		<div>
			<div>{score}</div>
			{playerSwing && <button onClick={() => handleClick()}>Click me</button>}
		</div>
	);
}
