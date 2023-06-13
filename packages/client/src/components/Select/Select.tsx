import useClickOutside from '@hooks/useClickOutside';
import styles from './Select.module.scss';
import { useMemo, useRef, useState } from 'react';

export enum SelectKind {
  Default,
  Purple,
}

export type SelectProps<P> = {
  active: P;
  setActive: (v: P) => void;
  list: P[];
  label?: string;
  variant?: SelectKind;
};

export default function Select<T>({
  list,
  active,
  setActive,
  label,
  variant = SelectKind.Default,
}: SelectProps<
  T extends string
    ? string
    : T & { id: string; title: string }
>) {
  const [show, setShow] = useState(false);
  const close = () => setShow(false);
  const ref = useRef(null);
  useClickOutside(ref, close, show);
  const classMap: Record<
    SelectKind,
    string | undefined
  > = useMemo(
    () => ({
      [SelectKind.Default]: styles.default,
      [SelectKind.Purple]: styles.purple,
    }),
    []
  );
  return (
    <div
      className={`${styles.container} ${classMap[variant]}`}>
      <div
        ref={ref}
        className={styles.active}
        onClick={() => setShow(prev => !prev)}>
        {label ||
          `${
            typeof active === 'string'
              ? active
              : active.title
          }`}
      </div>
      {show && (
        <div className={styles.list}>
          {list.map(item => (
            <div
              key={
                typeof item === 'string'
                  ? item
                  : item.id
              }
              className={styles.item}
              onClick={() => setActive(item)}>
              {typeof item === 'string'
                ? item
                : item.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
