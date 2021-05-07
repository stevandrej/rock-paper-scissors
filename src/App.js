import { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import Game from './containers/Game/Game';
import Header from './containers/Header/Header';
import Start from './containers/Start/Start';
import rulesImg from './images/image-rules.svg';

function App() {
	const [modalOpen, setModalOpen] = useState(false);
	const gameState = useSelector(state => state.game.gameState);

	const handleModalOpen = () => {
		setModalOpen(true);
	}

	const handleModalClose = () => {
		setModalOpen(false);
	}

	return (
		<>
			<div className='app'>
				<Modal open={modalOpen} onClose={handleModalClose}><img src={rulesImg} alt='rules'/></Modal>
				<Header />
				<main className='container' >
					{gameState === 'start' ? <Start /> : <Game />}
				</main>
			</div>

			<footer>
				<Button variant='outlined' onClick={handleModalOpen}>RULES</Button>
			</footer>
		</>
	);
}

export default App;