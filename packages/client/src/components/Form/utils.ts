import { FormErrors, FormState, FormValidators } from './types';

export function initState<TValues extends object>(initialValues: TValues): FormState<TValues> {
  return {
    values: {
      ...initialValues,
    },
    validators: {} as FormValidators<TValues>,
    errors: {} as FormErrors<TValues>,
  };
}

export const fillObject = (object: object, value: unknown): object => {
  return Object.keys(object).reduce((acc, key) => ({ ...acc, [key]: value }), { ...object });
};
