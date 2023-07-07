import cn from 'classnames';
import React, { useMemo } from 'react';

import { ResponsivePropertyType, AlignContentType, JustifyContentType } from '../typings';
import { getClassNames } from '../utils';

import styles from './index.module.css';
import guttersStyles from '../styles/gutters.module.scss';
import globalStyles from '../styles/globals.module.css';

export interface IRowProps {
  /**
   * HTML тэг элемент
   * Из-за <a href="https://github.com/philipwalton/flexbugs#flexbug-9" target="_blank">ограничений и багов</a>,
   * существующих во флексбоксах, невозможно использовать
   * некоторые элементы HTML как flex-контейнеры.
   */
  tag?: keyof JSX.IntrinsicElements;

  /**
   * Горизонтальный отступ между колонками.
   * Возможные значения: 0 | 8 | 16 | 24
   * или { sm | md | lg | xl | xxl : 0 | 8 | 16 | 24 }
   */
  gutter?: ResponsivePropertyType;

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

export const Row: React.FC<IRowProps> = ({
  tag: Component = 'div',
  gutter = 16,
  align,
  justify,
  children,
  className,
  dataTestId,
}) => {
  const componentClassName = cn(
    styles.component,
    guttersStyles.row,
    useMemo(() => getClassNames({ gutter }, guttersStyles), [gutter]),
    align && globalStyles[`align-${align}`],
    justify && globalStyles[`justify-content-${justify}`],
    className,
  );

  const componentAttributes = {
    'data-test-id': dataTestId,
  };

  return (
    <Component className={componentClassName} {...componentAttributes}>
      {children}
    </Component>
  );
};
