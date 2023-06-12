import { createContext, useContext } from 'react';

import { RegisterFieldArgs } from '@components/Form/hooks';

import { FormState } from './types';

export interface FormContextState<
  TValues extends object
> extends FormState<TValues> {
  registerField: (
    data: RegisterFieldArgs<TValues>
  ) => () => void;
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
    return () => () => null;
  },
  setFieldValue: () => null,
  cleanForm: () => null,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} as unknown as FormContextState<any>);

export const useFormContext = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return useContext<FormContextState<any>>(
    FormContext
  );
};
