import React, { useState } from 'react';
import './App.css';
import MainGame from './Components/MainGame';
import EndScreen from './Components/EndScreen';

function App() {
	const [gameStart, setGame] = useState(false);
	const [gameEnd, setEnd] = useState(false);

	function handleStart() {
		setGame(!gameStart);
	}

	return (
		<div className='App'>
			<div>
				<button onClick={() => handleStart()}>Game Start</button>
			</div>
			{gameStart && <MainGame />}
			{gameEnd && <EndScreen />}
		</div>
	);
}

export default App;
