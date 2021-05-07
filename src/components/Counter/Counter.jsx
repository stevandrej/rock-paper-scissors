import React from 'react';
import { useSelector } from 'react-redux';
import './counter.scss';

const Counter = () => {

	const counter = useSelector(state => state.game.score)

	return (
		<div className='counter'>
			<h2 className='counter__title'>SCORE</h2>
			<span className='counter__score'>{counter}</span>
		</div>
	)
}

export default Counter;