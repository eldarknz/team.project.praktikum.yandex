import { FormEventHandler, FormHTMLAttributes, useCallback, useState } from 'react';

import { FormFieldState } from './types';

interface UseFormProps {
  fields: FormFieldState[];
  onSubmit: () => Promise<void> | void;
}

type UseFormState = {
  isSubmitting: boolean;
  clear: () => void;
  formProps: {
    onSubmit: FormHTMLAttributes<HTMLFormElement>['onSubmit'];
  };
};

// ANCHOR - сделать так, чтобы в сабмите значение очищались от null и undefined

export const useForm = ({ fields, onSubmit }: UseFormProps): UseFormState => {
  const [isSubmitting, setSubmitting] = useState(false);

  const clear = useCallback(() => {
    fields.forEach(field => field.clear());
  }, []);

  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    async event => {
      event.preventDefault();

      const isFormValid = (await Promise.all(fields.map(field => field.isValid()))).every(
        isValid => isValid
      );

      if (isFormValid) {
        setSubmitting(true);

        try {
          await onSubmit();

          setSubmitting(false);
        } catch (error) {
          setSubmitting(false);

          throw error;
        }
      }
    },
    [fields, onSubmit]
  );

  return {
    isSubmitting,
    clear,
    formProps: {
      onSubmit: handleSubmit,
    },
  };
};
