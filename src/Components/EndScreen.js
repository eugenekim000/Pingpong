import React from 'react';

export default function EndScreen(props) {
	const { handleRestart } = props;
	return (
		<div>
			<div>Game Over</div>
			<button onClick={() => handleRestart()}>Restart</button>
		</div>
	);
}
