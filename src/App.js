import React, { useState } from 'react';
import './App.css';
import MainGame from './Components/MainGame';
import EndScreen from './Components/EndScreen';

function App() {
	const [showStart, setStart] = useState(true);
	const [showEnd, setEnd] = useState(false);
	const [highScore, setHighScore] = useState(0);

	function handleGameOver(score) {
		if (score > highScore) setHighScore(score);
		setStart(() => false);
		setEnd(() => true);
	}

	function handleRestart() {
		setStart((prevState) => !prevState);
		setEnd((prevState) => !prevState);
	}

	return (
		<div className='App'>
			{showStart && (
				<MainGame handleGameOver={handleGameOver} setHighScore={setHighScore} />
			)}
			{showEnd && (
				<EndScreen handleRestart={handleRestart} highScore={highScore} />
			)}
		</div>
	);
}

export default App;
