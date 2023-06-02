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

import { ViewerModel } from '@pages/Account/models';

import styles from './UserEditor.module.scss';

export type UserEditorForm = ViewerModel;

export interface UserEditorProps {
  viewer: ViewerModel;
  onSubmit: (
    values: UserEditorForm
  ) => Promise<void>;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export const UserEditor = ({
  viewer,
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

  const values: UserEditorForm =
    {} as UserEditorForm;

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
      title="Редактировать данные пользователя"
      isOpen={isOpen}
      onOpenChange={setDialogState}>
      <form onSubmit={handleSubmit}>
        <InputControl
          labelText="Имя"
          labelId="name">
          <Input
            name="firstName"
            id="name"
            value={viewer.firstName}
            onChange={() => {
              //
            }}
          />
        </InputControl>
        <InputControl
          labelText="Фамилия"
          labelId="secondName">
          <Input
            name="secondName"
            id="secondName"
            value={viewer.secondName}
            onChange={() => {
              //
            }}
          />
        </InputControl>
        <InputControl
          labelText="E-mail"
          labelId="email">
          <Input
            name="email"
            id="email"
            value={viewer.email}
            onChange={() => {
              //
            }}
          />
        </InputControl>
        <InputControl
          labelText="Телефон"
          labelId="phone">
          <Input
            name="phone"
            id="phone"
            value={viewer.phone}
            onChange={() => {
              //
            }}
          />
        </InputControl>
        <InputControl
          labelText="Логин"
          labelId="login">
          <Input
            name="login"
            id="login"
            value={viewer.login}
            onChange={() => {
              //
            }}
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
