import React, { useState } from 'react';
import './App.css';
import MainGame from './Components/MainGame';
import EndScreen from './Components/EndScreen';

function App() {
	//const gameOverAudio = new Audio('../public/game-over.mp3');

	const [gameStart, setGame] = useState(true);
	const [gameEnd, setEnd] = useState(false);

	function handleStart() {
		setGame(!gameStart);
	}

	function handleGameOver() {
		setGame((prevState) => !prevState);
		setEnd((prevState) => !prevState);
		//handleAudio(gameOverAudio);
	}

	function handleRestart() {
		setGame((prevState) => !prevState);
		setEnd((prevState) => !prevState);
	}

	return (
		<div className='App'>
			<div>
				<button onClick={() => handleStart()}>Game Start</button>
			</div>
			{gameStart && <MainGame handleGameOver={handleGameOver} />}
			{gameEnd && <EndScreen handleRestart={handleRestart} />}
		</div>
	);
}

export default App;
