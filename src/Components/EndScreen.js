import React, { useEffect, useState } from 'react';
import { playSound } from '../HelperFunctions';

import gameOver from '../assets/game-over.mp3';

export default function EndScreen(props) {
	const { handleRestart, highScore } = props;

	const gameOverAudio = new Audio(gameOver);

	useEffect(() => {
		//playSound(gameOverAudio);
	}, []);

	return (
		<div>
			<div className='high-score'>High Score: {highScore}</div>
			<div className='game-over'>Game Over</div>

			<button onClick={() => handleRestart()}>Restart</button>
		</div>
	);
}
