import { InputControl } from '@components/InputControl/InputControl';
import {
  ChangeEventHandler,
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useId,
  useState,
} from 'react';
import cn from 'classnames';
import './Input.scss';
import { useFormContext } from '@components/Form';

export type InputProps = {
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
  name,
  value = '',
  onChange,
  ...otherProps
}: InputProps) => {
  const inputId = labelText ? useId() : undefined;
  const inputClassNames = cn(inputClassName);

  const { registerField, setFieldValue } =
    useFormContext();

  const [localValue, setLocalValue] =
    useState(value);

  useEffect(() => {
    const unregisterField = registerField({
      name,
      validators: [],
      value: localValue,
      onClearForm: () => setLocalValue(''),
    });

    return unregisterField;
  }, []);

  const handleInput: ChangeEventHandler<HTMLInputElement> =
    useCallback(
      e => {
        const { value } = e.target;
        setFieldValue(name, value);
        setLocalValue(value);

        if (onChange) {
          onChange(e);
        }
      },
      [setFieldValue]
    );

  return (
    <InputControl
      labelId={inputId}
      labelText={labelText}
      error={error}>
      <input
        id={inputId}
        type={type}
        className={inputClassNames}
        name={name}
        onChange={handleInput}
        value={localValue}
        {...otherProps}
      />
    </InputControl>
  );
};
