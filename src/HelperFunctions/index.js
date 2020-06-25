export const timeout = (ms) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

export const generateRobotReturnTime = () => {
	return Math.round(Math.random() * 200) + 600;
};

export const playSound = (audioFile) => {
	audioFile.play();
};
