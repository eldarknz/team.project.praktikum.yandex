import {
  ValidationResult,
  Validator,
} from './types';

export const validateValue = async <T>(
  value: T,
  validators: Validator<T>[]
): Promise<ValidationResult> => {
  let validationResult: ValidationResult = null;
  let i = 0;

  while (
    validationResult === null &&
    i < validators.length
  ) {
    const res = await validators[i](value);

    res && (validationResult = res);
    i++;
  }

  return validationResult;
};
