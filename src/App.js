import React, { useState } from 'react';
import './App.css';
import MainGame from './Components/MainGame';
import EndScreen from './Components/EndScreen';
import HowToPlay from './Components/HowToPlay';

function App() {
	const [startGame, setStart] = useState(false);
	const [showMenu, setMenu] = useState(true);
	const [showEnd, setEnd] = useState(false);
	const [highScore, setHighScore] = useState(0);

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
