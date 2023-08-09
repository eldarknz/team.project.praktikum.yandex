import { ReactNode, useCallback } from 'react';
import { Cell, TCellAlign } from '../Cell';
import styles from '../../styles.module.scss';

export interface IColumnProps<Type> {
  field: string;
  headerName?: string;
  align?: TCellAlign;
  width?: number | string;
  formatter?: (value: any, row: Type) => ReactNode;
}

export interface IForumRowProps<Type> {
  index: number;
  columns: IColumnProps<Type>[];
  row: Type;
  onClick?: (row: Type, index: number) => void;
}

export const Row = <Type,>({ index, columns, row, onClick }: IForumRowProps<Type>) => {
  const handleClick = useCallback(() => {
    onClick?.(row, index);
  }, [index]);

  return (
    <div className={styles.tr} onClick={handleClick}>
      {columns.map(column => {
        const { field, formatter, ...rest } = column;
        const key = field as keyof Type;
        const value = row[key] as ReactNode;
        return (
          <Cell key={field} {...rest}>
            {formatter ? formatter(value, row) : value}
          </Cell>
        );
      })}
    </div>
  );
};
