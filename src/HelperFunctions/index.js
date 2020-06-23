export const timeout = (ms) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

export const generateRobotReturnTime = () => {
	return Math.round(Math.random() * 200) + 600;
};

export const handleAudio = (audio) => {
	const playPromise = audio.play();
	if (playPromise !== undefined) {
		playPromise
			.then((_) => {
				// autoplay started
			})
			.catch((err) => {
				console.info(err);
			});
	}
};
