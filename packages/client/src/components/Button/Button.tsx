import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType,
} from 'react';
import './Button.scss';
import { Link } from 'react-router-dom';

export type ButtonProps = {
  className?: string;
  type?:
    | 'submit'
    | 'reset'
    | 'button'
    | undefined;
  href?: string;
  Component?: ElementType;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  href,
  type = href ? undefined : 'button',
  className = href
    ? 'basicButton basicButton--link'
    : 'basicButton',
  Component = href ? Link : 'button',
  ...otherProps
}: ButtonProps) => {
  if (href) {
    const hrefProps = {
      [typeof Component === 'string'
        ? 'href'
        : 'to']: href,
    };

    return (
      <Component
        className={className}
        type={type}
        {...(otherProps as AnchorHTMLAttributes<HTMLAnchorElement>)}
        {...hrefProps}>
        {children}
      </Component>
    );
  }

  return (
    <Component
      className={className}
      {...otherProps}>
      {children}
    </Component>
  );
};
