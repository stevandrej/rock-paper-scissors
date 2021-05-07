import React, { useEffect } from 'react';
import './game.scss';
import { useDispatch, useSelector } from 'react-redux';
import Pick from '../../components/Pick/Pick'
import * as actions from '../../redux/actions/game';
import Button from '../../components/Button/Button';

const Game = () => {

	const dispatch = useDispatch();
	const userChoice = useSelector(state => state.game.userChoice);
	const PCChoice = useSelector(state => state.game.PCChoice);
	const gameWon = useSelector(state => state.game.gameWon);

	useEffect(() => {
		switch (userChoice) {
			case 'rock':
				switch (PCChoice) {
					case 'scissors':
						dispatch(actions.winAction())
						break;
					case 'paper':
						dispatch(actions.loseAction())
						break;
					case 'rock':
						dispatch(actions.drawAction())
						break;
					default:
						break;
				}
				break;
			case 'paper':
				switch (PCChoice) {
					case 'scissors':
						dispatch(actions.loseAction())
						break;
					case 'paper':
						dispatch(actions.drawAction())
						break;
					case 'rock':
						dispatch(actions.winAction())
						break;
					default:
						break;
				}
				break;
			case 'scissors':
				switch (PCChoice) {
					case 'scissors':
						dispatch(actions.drawAction())
						break;
					case 'paper':
						dispatch(actions.winAction())
						break;
					case 'rock':
						dispatch(actions.loseAction())
						break;
					default:
						break;
				}
				break;
			default:
				break;
		}
	}, [PCChoice, userChoice, dispatch])

	const setPlayAgain = () => {
		dispatch(actions.playAgain());
	}

	return (
		<div className='game'>
			<div className='game__pick'>
				<span className='game__pick__text'>You picked</span>
				<Pick propChoice={userChoice} />
			</div>
			<div className='game-options'>
				<span className='game-options__result'>You {gameWon}</span>
				<Button variant='default' wide={true} onClick={setPlayAgain}>Play again</Button>
			</div>
			<div className='game__pick'>
				<span className='game__pick__text'>The house picked</span>
				<Pick propChoice={PCChoice} />
			</div>
		</div>
	)
}

export default Game;