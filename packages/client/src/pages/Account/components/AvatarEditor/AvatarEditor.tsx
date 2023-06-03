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

import styles from './AvatarEditor.module.scss';

export interface AvatarEditorForm {
  file: File;
}

export interface AvatarEditorProps {
  isOpen: boolean;
  onSubmit: FormSubmitHandler<AvatarEditorForm>;
  onOpenChange: (isOpen: boolean) => void;
}

// TODO: добавить валидацию

export const AvatarEditor = ({
  isOpen: initialIsOpen,
  onSubmit,
  onOpenChange,
}: AvatarEditorProps) => {
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

  const handleSubmit: FormSubmitHandler<AvatarEditorForm> =
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
        label: 'Новый аватар',
        name: 'avatar',
      },
    ],
    []
  );

  return (
    <Dialog
      title="Редактировать аватар"
      isOpen={isOpen}
      onOpenChange={setDialogState}
      contentClass={styles.dialog}>
      <Form<AvatarEditorForm>
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
