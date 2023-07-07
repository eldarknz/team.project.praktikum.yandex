import type { Validator } from './types';

export const required = (message = 'Обязательное поле'): Validator<string> => {
  return async value => (value ? null : message);
};

export const minLength = (count: number, message?: string): Validator<string> => {
  return async value =>
    (value || '').length < count ? null : message || `Минимальное число символов - ${count}`;
};

export const maxLength = (count: number, message?: string): Validator<string> => {
  return async value =>
    (value || '').length > count ? null : message || `Максимальное число символов - ${count}`;
};
