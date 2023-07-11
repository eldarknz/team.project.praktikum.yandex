import { useCallback } from 'react';

import { FormState, Validator } from '../types';

type CleanHandler = () => void;

export interface RegisterFieldArgs<
  TValues extends object,
> {
  name: string;
  validators: Validator<TValues>[];
  value: unknown;
  onClearForm: () => void;
}

export const useRegisterField = <
  TValues extends object,
>({
  onClearHandlesChange,
  onFormStateChange,
}: {
  onClearHandlesChange: (
    fn: (state: CleanHandler[]) => CleanHandler[]
  ) => void;
  onFormStateChange: (
    fn: (
      state: FormState<TValues>
    ) => FormState<TValues>
  ) => void;
}) => {
  const registerField = useCallback(
    ({
      name,
      validators,
      value,
      onClearForm,
    }: RegisterFieldArgs<TValues>) => {
      // register field
      onClearHandlesChange(handlers => [
        ...handlers,
        onClearForm,
      ]);

      onFormStateChange(state => {
        return {
          ...state,
          validators: {
            ...state.validators,
            [name]: validators || [],
          },
          errors: {
            ...state.errors,
            [name]: null,
          },
          values: {
            ...state.values,
            [name]: value,
          },
        } as FormState<TValues>;
      });

      // unregister field
      return () => {
        onClearHandlesChange(handlers =>
          handlers.filter(h => h !== onClearForm)
        );

        onFormStateChange(state => {
          const { values, errors, validators } =
            state;

          delete (
            values as Record<string, unknown>
          )[name];
          delete (
            errors as Record<string, unknown>
          )[name];
          delete (
            validators as Record<string, unknown>
          )[name];

          return {
            values,
            errors,
            validators,
          };
        });
      };
    },
    [onClearHandlesChange, onFormStateChange]
  );

  return registerField;
};
