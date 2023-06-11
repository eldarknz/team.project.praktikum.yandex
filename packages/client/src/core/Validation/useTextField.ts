import {
  InputHTMLAttributes,
  ChangeEventHandler,
  FocusEventHandler,
  useState,
  useCallback,
} from 'react';
import {
  FormFieldState,
  FormFieldProps,
  ValidationResult,
} from './types';
import { validateValue } from './validation';

type Value = string;

type UseTextFieldProps = {
  name: string;
  value?: Value;
  onChange?: InputHTMLAttributes<HTMLInputElement>['onChange'];
  onBlur?: InputHTMLAttributes<HTMLInputElement>['onBlur'];
} & FormFieldProps<Value>;

type UseTextFieldState = FormFieldState<
  Value,
  {
    type: 'text';
    name: string;
    value?: Value;
    onChange?: InputHTMLAttributes<HTMLInputElement>['onChange'];
    onBlur?: InputHTMLAttributes<HTMLInputElement>['onBlur'];
  }
>;

export const useTextField = (
  props: UseTextFieldProps
): UseTextFieldState => {
  const {
    rules,
    name,
    value: initialValue = '',
  } = props;

  const [value, setValue] =
    useState(initialValue);
  const [error, setError] =
    useState<ValidationResult>(null);

  const onChange: ChangeEventHandler<HTMLInputElement> =
    useCallback(
      async event => {
        if (props.onChange) {
          props.onChange(event);
        }

        const { value } = event.target;

        setValue(value);
        setError(
          await validateValue(value, rules)
        );
      },
      [props, rules]
    );

  const onBlur: FocusEventHandler<HTMLInputElement> =
    useCallback(
      async event => {
        if (props.onBlur) {
          props.onBlur(event);
        }

        setError(
          await validateValue(value, rules)
        );
      },
      [props, rules, value]
    );

  const isValid = useCallback(async () => {
    const err = await validateValue(value, rules);
    setError(err);

    return !err;
  }, [value, rules]);

  return {
    fieldProps: {
      type: 'text',
      onChange,
      onBlur,
      name,
      value,
    },
    isValid,
    value,
    error,
  };
};
