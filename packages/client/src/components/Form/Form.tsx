import { FormEventHandler, HTMLProps, useCallback, useMemo, useState } from 'react';

import { FormContext } from './context';
import { fillObject, initState } from './utils';
import { useRegisterField } from './hooks/useRegisterField';
import { useValidate } from './hooks/useValidate';
import { FormState, FormSubmitHandler } from './types';

export interface FormProps<TValues extends object>
  extends Omit<HTMLProps<HTMLFormElement>, 'onSubmit'> {
  onSubmit: FormSubmitHandler<TValues>;
  initialValues?: TValues;
  onReset?: () => void;
}

export function Form<TValues extends object>({
  onSubmit,
  onReset,
  initialValues = {} as TValues,
  ...formProps
}: FormProps<TValues>) {
  const [formState, setFormState] = useState(initState(initialValues));
  const [onClearHandlers, setOnClearHandlers] = useState<(() => void)[]>([]);

  const registerField = useRegisterField<TValues>({
    onClearHandlesChange: setOnClearHandlers,
    onFormStateChange: setFormState,
  });
  const validate = useValidate<TValues>({
    formState,
    onFormStateChange: setFormState,
  });

  const handleReset: FormEventHandler = useCallback(e => {
    e.preventDefault();

    setFormState(initState(initialValues));

    if (onReset) {
      onReset();
    }
  }, []);
  const setFieldValue = useCallback(
    (name: string, value: unknown) => {
      setFormState({
        ...formState,
        values: {
          ...formState.values,
          [name]: value,
        },
      } as FormState<TValues>);
    },
    [formState],
  );

  const cleanForm = useCallback(() => {
    setFormState({
      ...formState,
      values: fillObject(formState.values, ''),
      errors: fillObject(formState.errors, ''),
    } as FormState<TValues>);

    onClearHandlers.forEach(h => h());
  }, [onClearHandlers, formState]);

  const providerValue = useMemo(
    () => ({
      ...formState,
      registerField,
      setFieldValue,
      cleanForm,
    }),
    [formState, registerField, setFieldValue, cleanForm],
  );

  const handleSubmit: FormEventHandler = useCallback(
    e => {
      e.preventDefault();

      if (validate()) {
        onSubmit({
          values: { ...formState.values },
          cleanForm,
        });
      }
    },
    [formState.values, onSubmit, validate, cleanForm],
  );

  return (
    <FormContext.Provider value={providerValue}>
      <form {...formProps} onReset={handleReset} onSubmit={handleSubmit} />
    </FormContext.Provider>
  );
}
