import React, { ButtonHTMLAttributes } from 'react';
import './Button.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  //   handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ children, ...props }: Props) => (
  <button className="custom-button" {...props}>
    {children}
  </button>
);

export default Button;
