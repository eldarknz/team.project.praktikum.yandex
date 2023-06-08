import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { Button } from '@components/Button';
import { Dialog } from '@components/Dialog';
import { Input } from '@components/Input';
import { useDialog } from '@hooks/useDialog';
import { Form } from '@components/Form';
import { FormSubmitHandler } from '@components/Form';

import styles from './PasswordEditor.module.scss';

export type PasswordEditorForm = {
  oldPassword: string;
  newPassword: string;
  repeatNewPassword: string;
};

export interface PasswordEditorProps {
  onSubmit: FormSubmitHandler<PasswordEditorForm>;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}
// TODO: добавить валидацию

export const PasswordEditor = ({
  isOpen: initialIsOpen,
  onSubmit,
  onOpenChange,
}: PasswordEditorProps) => {
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

  const handleSubmit: FormSubmitHandler<PasswordEditorForm> =
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
        label: 'Старый пароль',
        name: 'oldPassword',
      },
      {
        label: 'Новый пароль',
        name: 'newPassword',
      },
      {
        label: 'Повторите новый пароль',
        name: 'repeatNewPassword',
      },
    ],
    []
  );

  return (
    <Dialog
      title="Редактировать пароль"
      isOpen={isOpen}
      onOpenChange={setDialogState}
      contentClass={styles.dialog}>
      <Form<PasswordEditorForm>
        onSubmit={handleSubmit}>
        {fields.map(({ label, name }) => (
          <Input
            key={name}
            name={name}
            labelText={label}
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
