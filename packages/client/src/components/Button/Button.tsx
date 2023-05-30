import { ButtonHTMLAttributes } from 'react';

type ButtonProps = {
  className: string;
  type: 'submit' | 'reset' | 'button';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...otherProps }: ButtonProps) => {
  return <button {...otherProps}>{children}</button>;
};
