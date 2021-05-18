import { picks } from '../../components/Pick/pickChoices'

const initState = {
	modal: false,
	score: 0,
	gameMode: 'normal',
	userChoice: '',
	PCChoice: '',
	gameState: 'start',
	gameResult: ''
}

const game = (state = initState, action) => {
	switch (action.type) {
		case "WIN":
			return {
				...state,
				score: state.score + 1,
				gameResult: 'win'
			}
		case "LOSE":
			return {
				...state,
				score: state.score - 1,
				gameResult: 'lose'
			}
		case "DRAW":
			return {
				...state,
				gameResult: 'draw'
			}
		case "PICK":
			return {
				...state,
				gameState: 'game',
				userChoice: action.payload
			}
		case "PC_PICK":
			let pcRandomChoice;
			if(state.gameMode === 'normal')
				pcRandomChoice = picks[Math.floor(Math.random() * 3)];
			else
				pcRandomChoice = picks[Math.floor(Math.random() * 5)];
			return {
				...state,
				PCChoice: pcRandomChoice
			}
		case "PLAY_AGAIN":
			return {
				...state,
				gameState: 'start',
				PCChoice: '',
				userChoice: '',
				gameResult: ''
			}
		case "GAME_MODE":
			if (state.gameMode === 'normal') {
				return {
					...state,
					gameMode: 'advanced'
				}
			}
			else
				return {
					...state,
					gameMode: 'normal' 
			}
		default:
			return state;
	}
}

export default game;