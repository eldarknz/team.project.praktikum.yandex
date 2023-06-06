import { useCallback } from 'react';

import { isEmpty } from '@utils/isEmpty';

import {
  FormErrors,
  FormState,
  Validator,
} from '../types';

export const useValidate = <
  TValues extends object
>({
  formState,
  onFormStateChange,
}: {
  formState: FormState<TValues>;
  onFormStateChange: (
    newFormState: FormState<TValues>
  ) => void;
}) => {
  const validate = useCallback(() => {
    const { validators } = formState;

    // always reset form errors
    // in case there was form errors from backend
    onFormStateChange({
      ...formState,
      errors: {} as FormErrors<TValues>,
    });

    if (isEmpty(validators)) {
      return true;
    }

    const formErrors = Object.entries(
      validators
    ).reduce((errors, [name, validators]) => {
      const { values } = formState;
      const messages = (
        validators as Validator<TValues>[]
      ).reduce((result, validator) => {
        const value = (
          values as Record<string, unknown>
        )[name];
        const err = validator(value, values);
        return [...result, err];
      }, [] as ReturnType<Validator<TValues>>[]);

      if (messages[0]) {
        errors[name] = messages[0];
      }

      return errors;
    }, {} as Record<string, string>);

    if (isEmpty(formErrors)) {
      return true;
    }

    onFormStateChange({
      ...formState,
      errors: formErrors as FormErrors<TValues>,
    });

    return false;
  }, [formState, onFormStateChange]);

  return validate;
};
