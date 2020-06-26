import React, { useState } from 'react';

export default function HowToPlay(props) {
	const [toggleHelp, setHelp] = useState(false);

	const handleToggle = () => {
		setHelp((prevState) => !prevState);
	};

	return (
		<div>
			<button className='help-button' onClick={() => handleToggle()}>
				{!toggleHelp ? 'How To Play' : 'Back'}
			</button>
			{toggleHelp && (
				<div className='help-text'>
					When start is clicked, the ball is immediately hit over to your robot
					friend 👋🤖
					<p>
						He will hit back without fail and you will have 1 second to hit back
					</p>
					Every 10 points, the pace picks up, so be warned!
				</div>
			)}
		</div>
	);
}
