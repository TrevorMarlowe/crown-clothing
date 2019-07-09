import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoolgleSignIn, ...otherProps }) => (
	<button className={`${isGoolgleSignIn ? 'google-sign-in': ''} custom-button`} {...otherProps}>
		{children}
	</button>
);

export default CustomButton;