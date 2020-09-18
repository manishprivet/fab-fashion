import React, { ButtonHTMLAttributes } from 'react';
import './Button.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  googleSignIn?: boolean;
  inverted?: boolean;
}

const Button = ({ children, googleSignIn, inverted, ...props }: Props) => (
  <button
    className={`
      custom-button
      ${inverted ? 'inverted' : ''}
      ${googleSignIn ? 'google-sign-in' : ''}
    `}
    {...props}
  >
    {children}
  </button>
);

export default Button;
