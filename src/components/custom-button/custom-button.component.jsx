import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoolgleSignIn, inverted, ...otherProps }) => (
	<button
		className={`
			${inverted ? 'inverted' : ''} 
			${isGoolgleSignIn ? 'google-sign-in' : ''} 
			custom-button
		`}
		{...otherProps}
	>
		{children}
	</button>
);

export default CustomButton;
