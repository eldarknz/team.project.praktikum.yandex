import { InputControl } from '@components/InputControl/InputControl';
import {
  ChangeEventHandler,
  InputHTMLAttributes,
  useCallback,
  useEffect,
  ChangeEvent,
  FocusEvent,
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
  errorText?: string;
  labelText?: string;
  validator?: (content: string) => boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  inputClassName = 'baseInput',
  errorText,
  type = 'text',
  labelText,
  name,
  value = '',
  onChange,
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

  const handleChange: ChangeEventHandler<HTMLInputElement> =
    useCallback(
      e => {
        const { value } = e.target;

        if (error && validator) {
          const isCorrectEmail = validator(value);

          if (
            !isCorrectEmail &&
            value.length > 0
          ) {
            setError(
              errorText ? errorText : 'Ошибка'
            );
          } else {
            setError(null);
          }
        }

        setFieldValue(name, value);
        setLocalValue(value);

        if (onChange) {
          onChange(e);
        }
      },
      [setFieldValue, validator, error]
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
        name={name}
        value={localValue}
        {...otherProps}
      />
    </InputControl>
  );
};
