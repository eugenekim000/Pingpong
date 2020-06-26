export const timeout = (ms) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

export const generateReturnTime = (score, type) => {
	let returnTime;
	switch (type) {
		case 'player':
			returnTime = 1000;
			break;

		case 'robot':
			returnTime = Math.round(Math.random() * 200) + 600;
			break;
	}

	/* 	if (score >= 10)
		returnTime =
			returnTime / (1 + Number.parseFloat((score / 100).toPrecision(1))); */
	return returnTime;
};

export const playSound = (audioFile) => {
	audioFile.play();
};
