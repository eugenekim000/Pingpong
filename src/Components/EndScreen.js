import React, { useEffect } from 'react';
import gameOver from '../assets/game-over.mp3';
import { playSound } from '../HelperFunctions';
import outgoing from '../assets/ball-outgoing.mp3';

export default function EndScreen(props) {
	const { handleRestart } = props;

	useEffect(() => {
		playSound(outgoing);
	}, []);

	return (
		<div>
			<div>Game Over</div>
			<button onClick={() => handleRestart()}>Restart</button>
		</div>
	);
}
