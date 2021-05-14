import React, { useEffect, useRef } from 'react';
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
	const gameResult = useSelector(state => state.game.gameResult);
	const timerDelayResult = 1500; //1.5s delay

	const isFirstRun = useRef(true);

	useEffect(() => {
		if (isFirstRun.current)
			setTimeout(() => {
				dispatch(actions.pcPickAction());
				isFirstRun.current = false;
			}, timerDelayResult);
		else {
			if (userChoice.value === PCChoice.value) dispatch(actions.drawAction());
			else if ((userChoice.value + 1) % 3 === PCChoice.value) dispatch(actions.winAction());
			else dispatch(actions.loseAction());
		}
	}, [PCChoice, userChoice, dispatch])

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
		delay: timerDelayResult,
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
		delay: timerDelayResult + 300,
		config: {
			duration: 300
		}
	})

	if (!PCChoice) {
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
						<Pick propChoice={userChoice.name} />
					</div>

					<div className="grid-element game-result">
						<span className='result-text'></span>
					</div>

					<div className="pc-choice grid-element">
						<Pick propChoice='empty' />
					</div>
				</div>
			</animated.div>
		)
	}

	else return (
		<animated.div className='game-grid' style={styles}>
			<div className='user-infotext grid-element'>
				<span className='info-text'>You picked</span>
			</div>

			<div className="spacer"></div>

			<div className="pc-infotext grid-element">
				<span className='info-text'>The house picked</span>
			</div>

			<div className="user-choice grid-element">
				<Pick propChoice={userChoice.name} ripple={gameResult === 'win' ? true : false} />
			</div>

			<animated.div className="grid-element game-result" style={gameResultAnimation}>
				<span className='result-text'>{gameResult === 'draw' ? 'DRAW' : `You ${gameResult}`}</span>
				<Button variant='default' wide={true}
					onClick={() => {
						dispatch(actions.playAgain())
					}
					}>Play again</Button>
			</animated.div>

			<animated.div className="pc-choice grid-element" style={pcChoiceAnimation}>
				<Pick propChoice={PCChoice.name} ripple={gameResult === 'lose' ? true : false} />
			</animated.div>
		</animated.div>
	)
}

export default Game;