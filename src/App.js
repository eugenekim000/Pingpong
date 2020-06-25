import React, { useState } from 'react';
import './App.css';
import MainGame from './Components/MainGame';
import EndScreen from './Components/EndScreen';
import Test from './Components/Test';

function App() {
	const [gameStart, setGame] = useState(true);
	const [gameEnd, setEnd] = useState(false);

	function handleGameOver() {
		setGame((prevState) => !prevState);
		setEnd((prevState) => !prevState);
	}

	function handleRestart() {
		setGame((prevState) => !prevState);
		setEnd((prevState) => !prevState);
	}

	return (
		<div className='App'>
			{gameStart && <MainGame handleGameOver={handleGameOver} />}
			{gameEnd && <EndScreen handleRestart={handleRestart} />}
			{/* <Test /> */}
		</div>
	);
}

export default App;
