import { HTMLProps } from 'react';
import cn from 'classnames';

import style from './Card.module.scss';

export type CardProps = HTMLProps<HTMLDivElement>;

export const Card = ({
  className,
  ...otherProps
}: CardProps) => {
  return (
    <div
      {...otherProps}
      className={cn([style.card, className])}
    />
  );
};
