import React from 'react';
import './Button.css';

const STYLES = ['btn-primary', 'btn-outline'];
const SIZE = ['btn-medium', 'btn-large', 'btn-mobile', 'btn-wide'];
const COLOR = ['primary', 'blue', 'green', 'red'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyles,
    buttonSize,
    buttonColor,
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyles)
        ? buttonStyles
        : STYLES[0];
    const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];
    const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;

    return (
        <button
            className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor} `}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;
