import React, { useEffect } from 'react';
import './game.scss';
import { useDispatch, useSelector } from 'react-redux';
import Pick from '../../components/Pick/Pick'
import * as actions from '../../redux/actions/game';
import Button from '../../components/Button/Button';
import { useSpring, animated } from 'react-spring';

const Game = () => {

	const dispatch = useDispatch();
	const userChoice = useSelector(state => state.game.userChoice);
	const PCChoice = useSelector(state => state.game.PCChoice);
	const gameWon = useSelector(state => state.game.gameWon);

	useEffect(() => {
		if (userChoice.value === PCChoice.value) dispatch(actions.drawAction());
		else if ((userChoice.value + 1) % 3 === PCChoice.value) dispatch(actions.winAction());
		else dispatch(actions.loseAction());
	}, [PCChoice, userChoice, dispatch])

	const setPlayAgain = () => {
		dispatch(actions.playAgain());
	}

	const styles = useSpring({
		from: {
			opacity: 0
		},
		to: {
			opacity: 1
		},
		config: {
			duration: 300
		}
	})

	const pcChoiceAnimation = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
		delay: 500,
		config: {
			duration: 300
		}
	})

	const gameResultAnimation = useSpring({
		from: {
			opacity: 0
		},
		to: {
			opacity: 1
		},
		delay: 900,
		config: {
			duration: 300
		}
	})

	return (
		<animated.div style={styles}>
			<div className='game-grid'>
				<div className='user-infotext grid-element'>
					<span className='info-text'>You picked</span>
				</div>

				<div className="spacer"></div>

				<div className="pc-infotext grid-element">
					<span className='info-text'>The house picked</span>
				</div>

				<div className="user-choice grid-element">
					<Pick propChoice={userChoice.name} ripple={gameWon === 'win' ? true : false} />
				</div>

				<div className="grid-element game-result">
					<animated.div style={gameResultAnimation}>
						<span className='result-text'>{gameWon === 'draw' ? 'DRAW' : `You ${gameWon}`}</span>
					</animated.div>
					<Button variant='default' wide={true} onClick={setPlayAgain}>Play again</Button></div>

				<div className="pc-choice grid-element">
					<animated.div style={pcChoiceAnimation}>
						<Pick propChoice={PCChoice.name} ripple={gameWon === 'lose' ? true : false} />
					</animated.div>
				</div>
			</div>
		</animated.div>
	)
}

export default Game;