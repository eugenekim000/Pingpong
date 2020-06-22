import React, { useState, useEffect } from 'react';

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
		setTimeout(() => {
			if (returned === false) {
				console.log('failed to return');
				handleGameOver();
			}
		}, 2000);
	}

	function handleClick() {
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
