import {
  useCallback,
  useMemo,
  useState,
} from 'react';

import { Button } from '@components/Button';
import { Dialog } from '@components/Dialog';
import { Input } from '@components/Input';
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

export const AvatarEditor = ({
  isOpen,
  onSubmit,
  onOpenChange,
}: AvatarEditorProps) => {
  const [isSubmitting, setSubmitting] =
    useState(false);

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
      onOpenChange={onOpenChange}
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
