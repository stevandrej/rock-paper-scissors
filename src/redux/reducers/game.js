import { picks } from '../../components/Pick/pickChoices'

const initState = {
	modal: false,
	score: 0,
	userChoice: '',
	PCChoice: '',
	gameState: 'start',
	gameResult:''
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
			return{
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
			const pcRandomChoice = picks[Math.floor(Math.random() * 3)];
			return {
				...state,
				PCChoice: pcRandomChoice
			}
		case "PLAY_AGAIN":
			return{
				...state,
				gameState: 'start',
				PCChoice:'',
				userChoice:'',
				gameResult: ''
			}
		default:
			return state;
	}
}

export default game;