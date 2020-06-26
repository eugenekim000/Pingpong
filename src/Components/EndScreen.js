import React, { useEffect, useState } from 'react';
import { playSound } from '../HelperFunctions';

import gameOver from '../assets/game-over.mp3';

export default function EndScreen(props) {
	const [value, setValue] = useState('');
	const { handleRestart, highScore } = props;

	const gameOverAudio = new Audio(gameOver);

	const handleSubmit = () => {};
	const handleChange = (e) => {
		e.preventDefault();
		setValue(e.target.value);
	};
	useEffect(() => {
		//playSound(gameOverAudio);
	}, []);

	return (
		<div>
			<div className='high-score-name'>Name: {highScore.name}</div>
			<div className='high-score'>High Score: {highScore.score}</div>
			<div className='game-over'>Game Over</div>

			<div className='new-highscore'>
				<div className='blinking'>New High Score!!</div>
				<form onSubmit={handleSubmit} style={{ margin: '30px' }}>
					<label>
						Initials:
						<input
							type='text'
							value={value}
							onChange={handleChange}
							maxlength='3'
							className='input-form'
						/>
					</label>
					<input className='submit-button' type='submit' value='Submit' />
				</form>
			</div>

			<button className='restart-button' onClick={() => handleRestart()}>
				Restart
			</button>
		</div>
	);
}
