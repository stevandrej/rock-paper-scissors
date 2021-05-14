import React from 'react';
import './pick.scss';
import { useDispatch, useSelector } from 'react-redux';
import { pickAction } from '../../redux/actions/game';
import { picks } from './pickChoices';

const Pick = ({ propChoice, ripple }) => {

	const dispatch = useDispatch();
	const gameState = useSelector(state => state.game.gameState);
	const choice = picks.find(o => o.name === propChoice);

	const handleClick = () => {
		if (gameState === 'game')
			return;
		dispatch(pickAction(choice))
	}

	if(propChoice==='empty')
		return(
			<div className={`choice choice--${propChoice}`} >
		</div>
		)

	return (
		<div className={`choice choice--${choice.bgColor} ${ripple ? 'ripple' : ''}`} onClick={handleClick} >
			<div className='choice__inner'>
				<img className='choice__image' src={choice.image} alt={propChoice} />
			</div>
		</div>
	)
}

export default Pick;