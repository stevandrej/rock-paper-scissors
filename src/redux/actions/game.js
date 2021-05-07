export const winAction = () => {
	return {
		type: "WIN"
	}
}

export const loseAction = () => {
	return {
		type: "LOSE"
	}
}

export const drawAction = () => {
	return {
		type: "DRAW"
	}
}

export const pickAction = (payload) => {
	return{
		type: "PICK",
		payload: payload
	}
}

export const playAgain = () => {
	return{
		type: "PLAY_AGAIN"
	}
}