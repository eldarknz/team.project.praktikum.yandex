import { AnchorHTMLAttributes, ButtonHTMLAttributes, ElementType } from 'react';
import './Button.scss';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { Spinner } from '@components/Spinner';

/*
Button can be a link:
› If 'to' passed, it will render <Link /> from React Router
› If 'href' passed, it will become a regular <a /> tag

Views available:
› button - default view
› subButton - adds 'subButton' class
› link - adds 'basicButton--link' class
*/

export type ButtonProps = {
  loading?: boolean;
  className?: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
  href?: string;
  to?: string;
  view?: 'button' | 'subButton' | 'link';
  Component?: ElementType;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export const Button = ({
  loading,
  children,
  href,
  to,
  type = href || to ? undefined : 'button',
  view = 'button',
  className = cn({
    basicButton: true,
    subButton: view === 'subButton',
    'basicButton--link': view === 'link',
    'button--loading': loading,
  }),
  Component = to ? Link : href ? 'a' : 'button',
  ...otherProps
}: ButtonProps) => {
  if (href || to) {
    return (
      <Component
        className={className}
        type={type}
        to={to}
        href={href}
        {...(otherProps as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        <div className="button__content">{children}</div>
        <div className="button__spinner">{loading ? <Spinner /> : null}</div>
      </Component>
    );
  }

  return (
    <Component className={className} {...otherProps}>
      <div className="button__content">{children}</div>
      <div className="button__spinner">{loading ? <Spinner /> : null}</div>
    </Component>
  );
};
