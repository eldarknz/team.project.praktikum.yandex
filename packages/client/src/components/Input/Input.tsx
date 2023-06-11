import { InputControl } from '@components/InputControl/InputControl';
import {
  ChangeEventHandler,
  InputHTMLAttributes,
  useCallback,
  useEffect,
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
  // eslint-disable-next-line react-hooks/rules-of-hooks
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
    [validator, errorText]
  );

  const context = useFormContext();

  const [localValue, setLocalValue] =
    useState(value);

  useEffect(() => {
    if (!context) return;

    const unregisterField = context.registerField(
      {
        name,
        validators: [],
        value: localValue,
        onClearForm: () => setLocalValue(''),
      }
    );

    return unregisterField;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange: ChangeEventHandler<HTMLInputElement> =
    useCallback(
      e => {
        const { value } = e.target;

        if (errorText && validator) {
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

        if (context?.setFieldValue) {
          context.setFieldValue(name, value);
        }

        setLocalValue(value);

        if (onChange) {
          onChange(e);
        }
      },
      [
        errorText,
        validator,
        context,
        onChange,
        name,
      ]
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
