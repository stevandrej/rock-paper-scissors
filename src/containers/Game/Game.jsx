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
		if (userChoice.value === PCChoice.value) dispatch(actions.drawAction()) ;
		else if ((userChoice.value + 1) % 3 === PCChoice.value) dispatch(actions.winAction());
		else dispatch(actions.loseAction());
	}, [PCChoice, userChoice, dispatch])

	const setPlayAgain = () => {
		dispatch(actions.playAgain());
	}

	return (
		<div className='game'>
			<div className='game__pick'>
				<span className='game__pick__text'>You picked</span>
				<Pick propChoice={userChoice.name} />
			</div>
			<div className='game-options'>
				<span className='game-options__result'>You {gameWon}</span>
				<Button variant='default' wide={true} onClick={setPlayAgain}>Play again</Button>
			</div>
			<div className='game__pick'>
				<span className='game__pick__text'>The house picked</span>
				<Pick propChoice={PCChoice.name} />
			</div>
		</div>
	)
}

export default Game;