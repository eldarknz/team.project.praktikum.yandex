import { createContext, useContext } from 'react';

import { FormState, Validator } from './types';

export interface FormContextState<
  TValues extends object
> extends FormState<TValues> {
  registerField: (data: {
    name: string;
    value: unknown;
    validators: Validator<TValues>[];
    onClearForm: () => void;
  }) => () => void;
  setFieldValue: (
    name: string,
    value: unknown
  ) => void;
  cleanForm: () => void;
}

export const FormContext = createContext<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  FormContextState<any>
>({
  values: {},
  validators: {},
  errors: {},
  registerField: () => {
    //
  },
  setFieldValue: () => {
    //
  },
  cleanForm: () => {
    //
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} as unknown as FormContextState<any>);

export const useFormContext = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return useContext<FormContextState<any>>(
    FormContext
  );
};
