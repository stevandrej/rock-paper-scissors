import React from 'react';
import Pick from '../../components/Pick/Pick';
import './start.scss';

const Start = () => {
	return (
		<div className='game-content'>
			<div className="game-content__paper"><Pick propChoice="paper" /></div>
			<div className="game-content__scissors"><Pick propChoice="scissors" /></div>
			<div className="game-content__rock"><Pick propChoice="rock" /></div>
		</div>
	)
}

export default Start;