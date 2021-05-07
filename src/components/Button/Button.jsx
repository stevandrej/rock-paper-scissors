import React from 'react';
import './button.scss';

const Button = ({variant = 'default', onClick, fluid, wide, ...props}) => {

	const handleClick = (e) => {
		e.preventDefault();
		e.currentTarget.blur();
		onClick && onClick();
	}

	return (
		<button className={`btn btn--${variant} ${fluid ? "btn--fluid" : null} ${wide ? "btn--wide": null} `} onClick={handleClick} >{props.children}</button>
	)
}

export default Button;