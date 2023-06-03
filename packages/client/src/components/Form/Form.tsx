import {
  FormEventHandler,
  HTMLProps,
  useCallback,
  useMemo,
  useState,
} from 'react';

import { isEmpty } from '@utils/isEmpty';

import {
  FormContext,
  FormErrors,
  FormState,
  FormValidators,
  FormSubmitHandler,
  Validator,
} from './FormContext';

export interface FormProps<
  TValues extends Record<string, any>
> extends Omit<
    HTMLProps<HTMLFormElement>,
    'onSubmit'
  > {
  onSubmit: FormSubmitHandler<TValues>;
  initialValues?: TValues;
  onReset?: () => void;
}

function initState<
  TValues extends Record<string, any>
>(initialValues: TValues): FormState<TValues> {
  return {
    values: {
      ...initialValues,
    },
    validators: {} as FormValidators<TValues>,
    errors: {} as FormErrors<TValues>,
  };
}

const fillObject = (
  object: Record<string, unknown>,
  value: unknown
): Record<string, unknown> => {
  return Object.keys(object).reduce(
    (acc, key) => ({ ...acc, [key]: value }),
    { ...object }
  );
};

export function Form<
  TValues extends Record<string, any>
>({
  onSubmit,
  onReset,
  initialValues = {} as TValues,
  ...formProps
}: FormProps<TValues>) {
  const [formState, setFormState] = useState(
    initState(initialValues)
  );
  const [onClearHandlers, setOnClearHandlers] =
    useState<(() => void)[]>([]);

  const validate = useCallback(() => {
    const { validators } = formState;

    // always reset form errors
    // in case there was form errors from backend
    setFormState(state => ({
      ...state,
      errors: {} as FormErrors<TValues>,
    }));

    if (isEmpty(validators)) {
      return true;
    }

    const formErrors = Object.entries(
      validators
    ).reduce((errors, [name, validators]) => {
      const { values } = formState;
      const messages = (
        validators as Validator<TValues>[]
      ).reduce((result, validator) => {
        const value = values[name];
        const err = validator(value, values);
        return [...result, err];
      }, [] as ReturnType<Validator<TValues>>[]);

      if (messages[0]) {
        errors[name] = messages[0];
      }

      return errors;
    }, {} as Record<string, string>);

    if (isEmpty(formErrors)) {
      return true;
    }

    setFormState(state => ({
      ...state,
      errors: formErrors as any,
    }));

    return false;
  }, [formState]);

  const handleReset: FormEventHandler =
    useCallback(e => {
      e.preventDefault();

      setFormState(initState(initialValues));

      if (onReset) {
        onReset();
      }
    }, []);

  const registerField = useCallback(
    ({
      name,
      validators,
      value,
      onClearForm,
    }: {
      name: string;
      validators: Validator<TValues>[];
      value: any;
      onClearForm: () => void;
    }) => {
      // register field
      setOnClearHandlers([
        ...onClearHandlers,
        onClearForm,
      ]);

      setFormState(state => {
        return {
          ...state,
          validators: {
            ...state.validators,
            [name]: validators || [],
          },
          errors: {
            ...state.errors,
            [name]: null,
          },
          values: {
            ...state.values,
            [name]: value,
          },
        } as FormState<TValues>;
      });

      // unregister field
      return () => {
        setOnClearHandlers(
          onClearHandlers.filter(
            h => h !== onClearForm
          )
        );

        setFormState(state => {
          const { values, errors, validators } = {
            ...state,
          };

          delete values[name];
          delete errors[name];
          delete validators[name];

          return {
            values,
            errors,
            validators,
          };
        });
      };
    },
    []
  );

  const setFieldValue = useCallback(
    (name: string, value: any) => {
      setFormState({
        ...formState,
        values: {
          ...formState.values,
          [name]: value,
        },
      } as FormState<TValues>);
    },
    [formState]
  );

  const clearForm = useCallback(() => {
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
      clearForm,
    }),
    [
      formState,
      registerField,
      setFieldValue,
      clearForm,
    ]
  );

  const handleSubmit: FormEventHandler =
    useCallback(
      e => {
        e.preventDefault();

        if (validate()) {
          onSubmit({
            values: { ...formState.values },
            clearForm,
          });
        }
      },
      [
        formState.values,
        onSubmit,
        validate,
        clearForm,
      ]
    );

  return (
    <FormContext.Provider value={providerValue}>
      <form
        {...formProps}
        onReset={handleReset}
        onSubmit={handleSubmit}
      />
    </FormContext.Provider>
  );
}
