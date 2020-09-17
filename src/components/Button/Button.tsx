import React, { ButtonHTMLAttributes } from 'react';
import './Button.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  googleSignIn?: boolean;
}

const Button = ({ children, googleSignIn, ...props }: Props) => (
  <button className={`custom-button ${googleSignIn ? 'google-sign-in' : ''}`} {...props}>
    {children}
  </button>
);

export default Button;
