import cn from 'classnames';
import React from 'react';
import { Row } from './components/Row';
import { IColumnProps } from './components/Row';
import { Cell } from './components/Cell';

import styles from './styles.module.scss';

export interface IVirtualTableProps<Type> {
  columns: IColumnProps<Type>[];
  rows: Type[];
  stickyHead: boolean;
  onRowClick: (row: Type, index: number) => void;
  className?: string;
}

function VirtualTableNotMemo<Type>({
  columns,
  rows,
  stickyHead,
  onRowClick,
  className,
}: IVirtualTableProps<Type>) {
  return (
    <div className={cn(styles.table, className)}>
      <div
        className={cn(styles.thead, {
          [styles.theadSticky]: stickyHead,
        })}>
        <div className={styles.tr}>
          {columns.map(({ field, headerName, ...rest }) => {
            return (
              <Cell key={field} isHeaderCell={true} {...rest}>
                {headerName}
              </Cell>
            );
          })}
        </div>
      </div>
      <div className={styles.tbody}>
        {rows.map((row, index) => (
          <Row key={index} index={index} columns={columns} row={row} onClick={onRowClick} />
        ))}
      </div>
    </div>
  );
}

export const VirtualTable = React.memo(VirtualTableNotMemo) as typeof VirtualTableNotMemo;
