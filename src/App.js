import React, { useState, useEffect } from 'react';
import './App.css';
import MainGame from './Components/MainGame';
import EndScreen from './Components/EndScreen';
import HowToPlay from './Components/HowToPlay';
import firebase from './firebase';

function App() {
	const [startGame, setStart] = useState(false);
	const [showMenu, setMenu] = useState(false);
	const [showEnd, setEnd] = useState(true);
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState({ score: 0, name: 'huh' });

	useEffect(() => {
		/* 		firebase
			.firestore()
			.collection('high-scores')
			.onSnapshot((snapshot) => setHighScore(snapshot.docs[0].data())); */
	}, []);

	const handleGameOver = (score) => {
		if (score > highScore) setHighScore(score);
		setStart(() => false);
		setEnd(() => true);
	};

	const handleRestart = () => {
		setStart((prevState) => !prevState);
		setEnd((prevState) => !prevState);
	};

	const handleClick = () => {
		setStart(() => true);
		setMenu(() => false);
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
				/>
			)}
			<HowToPlay className='how-to' />
		</div>
	);
}

export default App;
