import { createContext, useContext } from 'react';

import { RegisterFieldArgs } from './hooks/useRegisterField';
import { FormState } from './types';

export interface FormContextState<
  TValues extends object,
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

export const FormContext =
  createContext<FormContextState<object> | null>(
    null
  );

export const useFormContext = () => {
  return useContext(FormContext);
};
