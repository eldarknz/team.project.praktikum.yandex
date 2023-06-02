import {
  FormEventHandler,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { Button } from '@components/Button';
import { Dialog } from '@components/Dialog';
import { Spinner } from '@components/Spinner';
import { Input } from '@components/Input';
import { InputControl } from '@components/InputControl';
import { useDialog } from '@hooks/useDialog';

import styles from './PasswordEditor.module.scss';

export type PasswordEditorForm = {
  oldPassword: string;
  newPassword: string;
  repeatNewPassword: string;
};

export interface PasswordEditorProps {
  onSubmit: (
    values: PasswordEditorForm
  ) => Promise<void>;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

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

  const values: PasswordEditorForm =
    {} as PasswordEditorForm;

  const handleSubmit: FormEventHandler =
    useCallback(
      async e => {
        // TODO: добавить валидацию
        e.preventDefault();

        setSubmitting(true);

        onSubmit(values).then(() =>
          setSubmitting(false)
        );
      },
      [onSubmit]
    );

  return (
    <Dialog
      title="Редактировать пароль"
      isOpen={isOpen}
      onOpenChange={setDialogState}>
      <form onSubmit={handleSubmit}>
        <InputControl
          labelText="Старый пароль"
          labelId="oldPassword">
          <Input
            name="oldPassword"
            id="oldPassword"
          />
        </InputControl>
        <InputControl
          labelText="Новый пароль"
          labelId="newPassword">
          <Input
            name="newPassword"
            id="newPassword"
          />
        </InputControl>
        <InputControl
          labelText="Повторите новый пароль"
          labelId="repeatNewPassword">
          <Input
            name="repeatNewPassword"
            id="repeatNewPassword"
          />
        </InputControl>

        {isSubmitting ? (
          <div className={styles.spinner}>
            <Spinner />
          </div>
        ) : (
          <Button type="submit">
            Редактировать
          </Button>
        )}
      </form>
    </Dialog>
  );
};
