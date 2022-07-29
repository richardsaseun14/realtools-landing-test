import classNames from 'classnames';
import React from 'react';
import { ButtonSize, ButtonVariant } from '../themes';

const Button = ({ children, variant, className, size = 'md' }) => {
	const classes = classNames(
		'px-10 text-lg rounded-xl font-medium flex items-center space-x-3',
		ButtonVariant[variant],
		ButtonSize[size],
		className
	);
	return <button className={classes}>{children}</button>;
};

export default Button;
