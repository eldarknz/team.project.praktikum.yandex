// Валидатор, который непосредственно проводит валидацию
export type Validator<T> = (
  params?: T
) => Promise<ValidationResult> | ValidationResult;

// Результат валидации:
export type ValidationResult = string | null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface FormFieldState<
  T = any,
  THtmlProps = any,
> {
  fieldProps: THtmlProps;
  value: T;
  error: string | null;
  isValid: () => Promise<boolean>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface FormFieldProps<T = any> {
  name: string;
  value?: T;
  rules: Validator<T>[];
}
