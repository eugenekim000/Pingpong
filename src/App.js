import React, { useState, useEffect } from 'react';
import './App.css';
import MainGame from './Components/MainGame';
import EndScreen from './Components/EndScreen';
import HowToPlay from './Components/HowToPlay';
import firebase from './firebase';

const SORT_OPTIONS = {
	SCORE_DESC: { column: 'score', direction: 'desc' },
};

function App() {
	const [startGame, setStart] = useState(false);
	const [showMenu, setMenu] = useState(true);
	const [showEnd, setEnd] = useState(false);
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState({ score: 9999, initial: '...' });

	useEffect(() => {
		const unsubscribe = firebase
			.firestore()
			.collection('high-scores')
			.orderBy(
				SORT_OPTIONS.SCORE_DESC.column,
				SORT_OPTIONS.SCORE_DESC.direction
			)
			.onSnapshot((snapshot) => {
				setHighScore(snapshot.docs[0].data());
				console.log(snapshot.docs[0].data());
			});

		return () => unsubscribe();
	}, []);

	const handleGameOver = (score) => {
		if (score > highScore) setHighScore(score);
		setStart(false);
		setEnd(true);
	};

	const handleRestart = () => {
		setStart((prevState) => !prevState);
		setEnd((prevState) => !prevState);
	};

	const handleClick = () => {
		setStart(true);
		setMenu(false);
	};

	return (
		<div className='App'>
			{showMenu && (
				<button className='start-button' onClick={() => handleClick()}>
					Start!
				</button>
			)}
			{startGame && (
				<MainGame
					className='main-game'
					handleGameOver={handleGameOver}
					setHighScore={setHighScore}
					score={score}
					setScore={setScore}
				/>
			)}
			{showEnd && (
				<EndScreen
					className='end-screen'
					handleRestart={handleRestart}
					highScore={highScore}
					score={score}
				/>
			)}
			<HowToPlay className='how-to' />
		</div>
	);
}

export default App;
