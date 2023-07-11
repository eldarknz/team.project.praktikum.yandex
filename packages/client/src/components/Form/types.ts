export type Validator<TValues> = (
  value: unknown,
  values: TValues
) => string | null | undefined;

export type FormErrors<TValues> = Record<
  keyof TValues,
  string | null | undefined
>;

export type FormValidators<
  TValues extends object,
> = Record<keyof TValues, Validator<TValues>[]>;

export interface FormState<
  TValues extends object,
> {
  values: TValues;
  errors: FormErrors<TValues>;
  validators: FormValidators<TValues>;
}

export type FormSubmitHandler<TValues> = (data: {
  values: TValues;
  cleanForm: () => void;
}) => void | Promise<void>;
