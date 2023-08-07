import { HTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';
import './InputControl.scss';

type InputControlProps = {
  labelText?: string;
  labelClassName?: string;
  labelId?: string;
  wrapperClassName?: string;
  children: ReactNode;
  error?: ReactNode | boolean;
} & HTMLAttributes<HTMLDivElement>;

export const InputControl = ({
  labelText,
  labelClassName,
  labelId,
  wrapperClassName = 'inputControl',
  error,
  children,
}: InputControlProps) => {
  return (
    <>
      <div className={cn(wrapperClassName)}>
        {labelId && (
          <label htmlFor={labelId} className={cn(labelClassName, 'inputLabel')}>
            {labelText}
          </label>
        )}
        <div>{children}</div>
        {error && <div className="inputError">{error}</div>}
      </div>
    </>
  );
};
