import { InputControl } from '@components/InputControl/InputControl';
import {
  ChangeEvent,
  FocusEvent,
  InputHTMLAttributes,
  useCallback,
  useId,
  useState,
} from 'react';
import cn from 'classnames';
import './Input.scss';

export type InputProps = {
  inputClassName?: string;
  name: string;
  type?: 'text' | 'password' | 'file' | 'hidden';
  errorText?: string;
  labelText?: string;
  validator?: (content: string) => boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  inputClassName = 'baseInput',
  errorText,
  type = 'text',
  labelText,
  validator,
  ...otherProps
}: InputProps) => {
  const [error, setError] = useState<
    string | null
  >(null);

  const inputId = labelText ? useId() : undefined;
  const inputClassNames = cn(inputClassName, {
    'baseInput--error': error,
  });

  const handleBlur = useCallback(
    (event: FocusEvent<HTMLInputElement>) => {
      const { value } = event.target;

      if (validator) {
        const isCorrect = validator(value);

        if (!isCorrect && value.length > 0) {
          setError(
            errorText ? errorText : 'Ошибка'
          );
        } else {
          setError(null);
        }
      }
    },
    [validator, error]
  );

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (error && validator) {
        const { value } = event.target;

        const isCorrectEmail = validator(value);

        if (!isCorrectEmail && value.length > 0) {
          setError(
            errorText ? errorText : 'Ошибка'
          );
        } else {
          setError(null);
        }
      }
    },
    [validator, error]
  );

  return (
    <InputControl
      labelId={inputId}
      labelText={labelText}
      error={error}>
      <input
        id={inputId}
        type={type}
        onBlur={handleBlur}
        onChange={handleChange}
        className={inputClassNames}
        {...otherProps}
      />
    </InputControl>
  );
};
