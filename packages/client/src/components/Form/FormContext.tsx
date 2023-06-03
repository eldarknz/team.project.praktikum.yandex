import { createContext, useContext } from 'react';

export type Validator<TValues> = (
  value: unknown,
  values: TValues
) => string | null | undefined;

export type FormErrors<TValues> = Record<
  keyof TValues,
  string | null | undefined
>;

export type FormValidators<
  TValues extends Record<string, any>
> = Record<keyof TValues, Validator<TValues>[]>;

export interface FormState<
  TValues extends Record<string, any>
> {
  values: TValues;
  errors: FormErrors<TValues>;
  validators: FormValidators<TValues>;
}

export interface FormContextState<
  TValues extends Record<string, any>
> extends FormState<TValues> {
  registerField: (data: {
    name: string;
    value: any;
    validators: Validator<TValues>[];
    onClearForm: () => void;
  }) => () => void;
  setFieldValue: (
    name: string,
    value: any
  ) => void;
  clearForm: () => void;
}

export type FormSubmitHandler<
  TValues extends Record<string, any>
> = (data: {
  values: TValues;
  clearForm: () => void;
}) => void | Promise<void>;

export const FormContext = createContext<
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
  clearForm: () => {
    //
  },
} as unknown as FormContextState<any>);

export const useFormContext = () => {
  return useContext<FormContextState<any>>(
    FormContext
  );
};
