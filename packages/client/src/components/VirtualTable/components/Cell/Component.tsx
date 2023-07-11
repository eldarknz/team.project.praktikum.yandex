import cn from 'classnames';
import { ReactNode } from 'react';
import { IColumnProps } from '../Row';
import styles from '../../styles.module.scss';

export type TCellAlign = 'left' | 'center' | 'right';

export type ICellProps<Type> = {
  isHeaderCell?: boolean;
  children: ReactNode;
} & Pick<IColumnProps<Type>, 'width' | 'align'>;

export const getAlignClassname = (align: TCellAlign) => {
  return align === 'center' ? styles.alignCenter : align === 'right' ? styles.alignRight : '';
};

export const Cell = <Type,>({
  isHeaderCell = false,
  width,
  align = 'left',
  children,
}: ICellProps<Type>) => {
  const componentProps = {
    className: cn(isHeaderCell ? styles.th : styles.td, getAlignClassname(align)),
    style: {
      minWidth: width ? width : 'auto',
      maxWidth: width ? width : 'auto',
    },
  };

  return <div {...componentProps}>{children}</div>;
};
