import { ReactNode } from 'react';
import cn from 'classnames';

import style from './Icon.module.scss';

export interface IconProps {
  icon: ReactNode;
  className?: string;
  size?: number;
}

export const Icon = ({ icon, className, size = 24 }: IconProps) => {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
      className={cn([className, style.icon])}>
      {icon}
    </div>
  );
};
