import cn from 'classnames';
import React, { useMemo } from 'react';

import {
  ResponsivePropertyType,
  AlignContentType,
  JustifyContentType,
} from '../typings';
import { getClassNames } from '../utils';

import styles from './index.module.scss';
import guttersStyles from '../styles/gutters.module.scss';
import globalStyles from '../styles/globals.module.css';

export interface IColProps {
  /**
   * HTML тэг элемент
   */
  tag?: keyof JSX.IntrinsicElements;

  /**
   * Управление шириной колонки.
   * Возможные значения: 1 - 12 | full | auto
   * или { sm | md | lg | xl | xxl : 1 - 12 | full | auto }
   */
  width?: ResponsivePropertyType;

  /**
   * Управлние смещением колонки.
   * Возможные значения: 1 - 12
   * или { sm | md | lg | xl | xxl : 1 - 11 }
   */
  offset?: ResponsivePropertyType;

  /**
   * Управление порядком колонок.
   * Возможные значения: 1 - 12 | first | last
   * или { sm | md | lg | xl | xxl : 1 - 12 | first | last }
   */
  order?: ResponsivePropertyType;

  /**
   * Управление выравниванием содержимого контейнера по вертикальной оси
   */
  align?: AlignContentType;

  /**
   * Управление выравниванием содержимого контейнера по горизонтальной оси
   */
  justify?: JustifyContentType;

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

export const Col: React.FC<IColProps> = ({
  tag: Component = 'div',
  width,
  offset,
  order,
  align,
  justify,
  children,
  className,
  dataTestId,
}) => {
  const componentClassName = cn(
    styles.component,
    guttersStyles.col,
    useMemo(
      () =>
        getClassNames(
          { width, offset, order },
          styles
        ),
      [order, offset, width]
    ),
    align && globalStyles[`align-${align}`],
    justify &&
      globalStyles[`justify-content-${justify}`],
    className
  );

  const componentAttributes = {
    'data-test-id': dataTestId,
  };

  return (
    <Component
      className={componentClassName}
      {...componentAttributes}>
      {children}
    </Component>
  );
};
