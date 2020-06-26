import React, { useEffect, useState } from 'react';
import { playSound } from '../HelperFunctions';
import firebase from '../firebase';

import gameOver from '../assets/game-over.mp3';

export default function EndScreen(props) {
	const [value, setValue] = useState('');
	const [newHighScore, setNewHighScore] = useState(false);
	const { handleRestart, highScore, score } = props;

	const db = firebase.firestore();
	const gameOverAudio = new Audio(gameOver);

	const handleChange = (e) => {
		e.preventDefault();
		setValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		let highScoreData = {
			score: score,
			initial: value,
		};
		db.collection('high-scores').add({
			initial: value,
			score: score,
		});
	};

	useEffect(() => {
		//playSound(gameOverAudio);
		if (score > highScore.score) {
			setNewHighScore(true);
		}
	}, []);

	const handleTest = () => {
		let highScoreData = {
			score: score,
			name: value,
		};
		db.collection('high-scores').add({
			initial: 'awe',
			score: 10,
		});
	};

	return (
		<div>
			<button className='restart-button' onClick={() => handleRestart()}>
				Restart
			</button>
			{!newHighScore && (
				<div className='current-score'>your score: {score}</div>
			)}
			<div className='high-score-name'>Name: {highScore.initial}</div>
			<div className='high-score'>High Score: {highScore.score}</div>
			<div className='game-over'>Game Over</div>
			{newHighScore && (
				<div className='new-highscore'>
					<div className='blinking'>New High Score!!</div>
					<form onSubmit={(e) => handleSubmit(e)} style={{ margin: '30px' }}>
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
			)}
		</div>
	);
}
