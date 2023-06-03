import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { Button } from '@components/Button';
import { Dialog } from '@components/Dialog';
import { Input } from '@components/Input';
import { Form } from '@components/Form';
import { useDialog } from '@hooks/useDialog';
import {
  FormSubmitHandler,
  FormContextState,
} from '@components/Form/FormContext';

import { ViewerModel } from '@pages/Account/models';

import styles from './UserEditor.module.scss';

export type UserEditorForm = ViewerModel;

export type UserFormContext =
  FormContextState<UserEditorForm>;

export interface UserEditorProps {
  viewer: ViewerModel;
  onSubmit: FormSubmitHandler<UserEditorForm>;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}
// TODO: добавить валидацию

export const UserEditor = ({
  isOpen: initialIsOpen,
  onSubmit,
  onOpenChange,
}: UserEditorProps) => {
  const { isOpen, setState: setDialogState } =
    useDialog(initialIsOpen);
  const [isSubmitting, setSubmitting] =
    useState(false);

  useEffect(() => {
    setDialogState(initialIsOpen);
  }, [initialIsOpen]);
  useEffect(() => {
    onOpenChange(isOpen);
  }, [isOpen, onOpenChange]);

  const handleSubmit: FormSubmitHandler<UserEditorForm> =
    useCallback(
      async data => {
        setSubmitting(true);
        await onSubmit(data);
        setSubmitting(false);
      },
      [onSubmit]
    );

  const fields = useMemo(
    () => [
      {
        label: 'E-mail',
        name: 'email',
      },
      {
        label: 'Логин',
        name: 'login',
      },
      {
        label: 'Имя',
        name: 'name',
      },
      {
        label: 'Фамилия',
        name: 'secondName',
      },
      {
        label: 'Телефон',
        name: 'phone',
      },
    ],
    []
  );

  return (
    <Dialog
      title="Редактировать данные"
      isOpen={isOpen}
      onOpenChange={setDialogState}
      contentClass={styles.dialog}>
      <Form onSubmit={handleSubmit}>
        {fields.map(({ label, name }) => (
          <Input
            key={name}
            labelText={label}
            name={name}
          />
        ))}

        <Button
          type="submit"
          loading={isSubmitting}
          disabled={isSubmitting}>
          Редактировать
        </Button>
      </Form>
    </Dialog>
  );
};
