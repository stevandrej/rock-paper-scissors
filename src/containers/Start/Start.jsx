import React from 'react';
import { useSelector } from 'react-redux';
import Pick from '../../components/Pick/Pick';
import './start.scss';

const Start = () => {

	const gameMode = useSelector(state => state.game.gameMode);

	if (gameMode === 'normal') {
		return (
			<div className='game-content game-content--normal'>
				<div className="game-content__weapon game-content__weapon--paper"><Pick propChoice="paper" /></div>
				<div className="game-content__weapon game-content__weapon--scissors"><Pick propChoice="scissors" /></div>
				<div className="game-content__weapon game-content__weapon--rock"><Pick propChoice="rock" /></div>
			</div>
		)
	}
	else
		return (
			<div className='game-content game-content--advanced'>
				<div className="game-content__weapon game-content__weapon--paper-adv"><Pick propChoice="paper" /></div>
				<div className="game-content__weapon game-content__weapon--scissors-adv"><Pick propChoice="scissors" /></div>
				<div className="game-content__weapon game-content__weapon--rock-adv"><Pick propChoice="rock" /></div>
				<div className="game-content__weapon game-content__weapon--lizard-adv"><Pick propChoice="lizard" /></div>
				<div className="game-content__weapon game-content__weapon--spock-adv"><Pick propChoice="spock" /></div>
			</div>
		)
}

export default Start;