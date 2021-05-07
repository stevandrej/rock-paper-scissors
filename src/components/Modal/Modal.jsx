import React from 'react';
import './modal.scss';
import closeImg from '../../images/icon-close.svg';

const Modal = (props) => {

	const handleClose = (e) => {
		props.onClose();
	}

	const renderModal = (
		<div className="modal" onClick={handleClose}>
			<div className="modal__container" onClick={(e) => { e.stopPropagation() }}>
				<div className='modal__topbar'><h4>RULES</h4><img onClick={handleClose} src={closeImg} alt='icon close' className="modal__icon-close" /></div>
				<div className='modal__content'>
					{props.children}
				</div>
			</div>
		</div>
	)

	return (
		props.open ? renderModal : null
	)

}

export default Modal;