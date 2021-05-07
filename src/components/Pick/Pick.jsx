import React from 'react';
import './pick.scss';
import { useDispatch, useSelector } from 'react-redux';
import { pickAction } from '../../redux/actions/game';
import { picks } from './pickChoices';


const Pick = ({ propChoice }) => {

	const dispatch = useDispatch();
	const gameState = useSelector(state => state.game.gameState);
	const choice = picks.find(o => o.name === propChoice);

	const handleClick = () => {
		if (gameState === 'game')
			return;
		dispatch(pickAction(propChoice))
	}

	return (
		<div className={`choice choice--${choice.bgColor}`} onClick={handleClick} >
			<div className='choice__inner'>
				<img className='choice__image' src={choice.image} alt={propChoice} />
			</div>
		</div>
	)
}

export default Pick;