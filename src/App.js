import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import Game from './containers/Game/Game';
import Header from './containers/Header/Header';
import Start from './containers/Start/Start';
import rulesImg from './images/image-rules.svg';
import advRulesImg from './images/image-rules-bonus.svg';
import { toggleGameMode } from './redux/actions/game';

function App() {
	const [modalOpen, setModalOpen] = useState(false);
	const gameState = useSelector(state => state.game.gameState);
	const gameMode = useSelector(state => state.game.gameMode);
	const dispatch = useDispatch();

	const handleModalOpen = () => {
		setModalOpen(true);
	}

	const handleModalClose = () => {
		setModalOpen(false);
	}

	const handleGameMode = () => {
		dispatch(toggleGameMode());
	}

	return (
		<>
			<div className='app'>
				<Modal open={modalOpen} onClose={handleModalClose}>
					{gameMode === 'normal' ? <img src={rulesImg} alt='rules' /> : <img src={advRulesImg} alt='rules' />}
				</Modal>
				<div className='wrapper'>
					<Header />
					<main className='content' >
						{gameState === 'start' ? <Start /> : <Game />}
					</main>
				</div>
				<footer>
					<Button disabled={gameState==='start' ? false : true} onClick={handleGameMode} >Change game mode</Button>
					<Button variant='outlined' onClick={handleModalOpen}>RULES</Button>
				</footer>
			</div>
		</>
	);
}

export default App;