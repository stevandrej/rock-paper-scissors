import { picks } from '../../components/Pick/pickChoices'

const initState = {
	modal: false,
	score: 0,
	userChoice: '',
	PCChoice: '',
	gameState: 'start',
	gameWon:''
}

const game = (state = initState, action) => {
	switch (action.type) {
		case "WIN":
			return {
				...state,
				score: state.score + 1,
				gameWon: 'win'
			}
		case "LOSE":
			return {
				...state,
				score: state.score - 1,
				gameWon: 'lose'
			}
		case "DRAW":
			return{
				...state,
				gameWon: 'draw'
			}
		case "PICK":
			const pcRandomChoice = picks[Math.floor(Math.random() * 3)];
			return {
				...state,
				gameState: 'game',
				PCChoice: pcRandomChoice,
				userChoice: action.payload
			}
		case "PLAY_AGAIN":
			return{
				...state,
				gameState: 'start',
				PCChoice:'',
				userChoice:'',
				gameWon: ''
			}
		default:
			return state;
	}
}

export default game;