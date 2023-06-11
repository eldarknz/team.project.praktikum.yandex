import cn from 'classnames';
import React, { useMemo } from 'react';

import { BreakpointsType } from '../typings';
import { getClassNames } from '../utils';

import styles from './index.module.scss';

export interface IContainerProps {
  /**
   * HTML тэг элемент
   */
  tag?: keyof JSX.IntrinsicElements;

  /**
   * Управление шириной контейнера
   * Возможные значения: sm | md | lg | xl | xxl | full
   */
  width?: BreakpointsType | 'full';

  /**
   * Управление горизонтальным отступом
   * Возможные значения: 0 | 8 | 16 | 24
   */
  gutter?: number;

  /**
   * Дополнительный класс
   */
  className?: string;

  /**
   * Содержимое
   */
  children?: React.ReactNode;

  /**
   * Идентификатор для систем автоматизированного тестирования
   */
  dataTestId?: string;
}

export const Container: React.FC<
  IContainerProps
> = ({
  tag: Component = 'div',
  width,
  gutter,
  children,
  className,
  dataTestId,
}) => {
  const componentClassName = useMemo(
    () =>
      cn(
        width
          ? getClassNames(
              { component: width },
              styles
            )
          : styles['component'],
        getClassNames({ gutter }, styles),
        className
      ),
    [className, gutter, width]
  );

  return (
    <Component className={componentClassName}>
      {children}
    </Component>
  );
};
