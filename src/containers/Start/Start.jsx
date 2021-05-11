import React from 'react';
import Pick from '../../components/Pick/Pick';
import './start.scss';

const Start = () => {
	return (
		<div className='game-content'>
			<div className="game-content__weapon game-content__weapon--paper"><Pick propChoice="paper" /></div>
			<div className="game-content__weapon game-content__weapon--scissors"><Pick propChoice="scissors" /></div>
			<div className="game-content__weapon game-content__weapon--rock"><Pick propChoice="rock" /></div>
		</div>
	)
}

export default Start;