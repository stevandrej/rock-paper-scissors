import React from 'react';
import { useSelector } from 'react-redux';
import Counter from '../../components/Counter/Counter';
import './header.scss';
import logo from '../../images/logo-bonus.svg'

const Header = () => {

	const gameMode = useSelector(state => state.game.gameMode);

	return (
		<header className='header'>
			{gameMode === 'normal' ? <h1 className='header__title'>ROCK<br />PAPER<br />SCISSORS</h1> : <img src={logo} alt='logo' />}
			<Counter />
		</header>
	)
}

export default Header;