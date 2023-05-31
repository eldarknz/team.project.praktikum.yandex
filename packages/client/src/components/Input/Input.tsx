import { InputControl } from '@components/InputControl/InputControl';
import {
  InputHTMLAttributes,
  useId,
} from 'react';
import cn from 'classnames';
import './Input.scss';

type InputProps = {
  inputClassName?: string;
  name: string;
  type?: 'text' | 'password' | 'file' | 'hidden';
  error?: string | boolean;
  labelText?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  inputClassName = 'baseInput',
  error,
  type = 'text',
  labelText,
  ...otherProps
}: InputProps) => {
  const inputId = labelText ? useId() : undefined;
  const inputClassNames = cn(inputClassName);

  return (
    <InputControl
      labelId={inputId}
      labelText={labelText}
      error={error}>
      <input
        id={inputId}
        type={type}
        className={inputClassNames}
        {...otherProps}
      />
    </InputControl>
  );
};
