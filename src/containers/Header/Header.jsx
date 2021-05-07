import React from 'react';
import Counter from '../../components/Counter/Counter';
import './header.scss';

const Header = () => {
	return (
		<header className='header'>
			<h1 className='header__title'>ROCK<br />PAPER<br />SCISSORS</h1>
			<Counter />
		</header>
	)
}

export default Header;