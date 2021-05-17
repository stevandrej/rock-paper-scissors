import React from 'react';
import './button.scss';

const Button = ({ variant = 'default', onClick, fluid, wide, disabled = false, ...props }) => {

	const handleClick = (e) => {
		e.preventDefault();
		e.currentTarget.blur();
		onClick && onClick();
	}

	return (
		<button disabled={disabled} className={`btn btn--${variant} ${fluid ? "btn--fluid" : ''} ${wide ? "btn--wide" : ''} `} onClick={handleClick} >{props.children}</button>
	)
}

export default Button;