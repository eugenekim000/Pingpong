import React, { useEffect } from 'react';
import { playSound } from '../HelperFunctions';

import gameOver from '../assets/game-over.mp3';

export default function EndScreen(props) {
	const { handleRestart } = props;

	const gameOverAudio = new Audio(gameOver);

	useEffect(() => {
		playSound(gameOverAudio);
	}, []);

	return (
		<div>
			<div>Game Over</div>
			<button onClick={() => handleRestart()}>Restart</button>
		</div>
	);
}
