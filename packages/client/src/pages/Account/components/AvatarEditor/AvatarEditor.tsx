import { Button } from '@components/Button';
import { Dialog } from '@components/Dialog';
import { Input } from '@components/Input';

import styles from './AvatarEditor.module.scss';
import {
  useFileField,
  useForm,
} from '@core/Validation';

export interface AvatarEditorForm {
  file: File;
}

export interface AvatarEditorProps {
  isOpen: boolean;
  onSubmit: (
    value: AvatarEditorForm
  ) => Promise<void>;
  onOpenChange: (isOpen: boolean) => void;
}

export const AvatarEditor = ({
  isOpen,
  onSubmit,
  onOpenChange,
}: AvatarEditorProps) => {
  const fileField = useFileField({
    name: 'file',
    rules: [
      value => (value ? null : 'Выберите файл'),
    ],
  });

  const { isSubmitting, formProps } = useForm({
    fields: [fileField],
    onSubmit: async () => {
      if (!fileField.value) return;

      await onSubmit({ file: fileField.value });
    },
  });

  return (
    <Dialog
      title="Редактировать аватар"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      contentClass={styles.dialog}>
      <form {...formProps}>
        <Input
          {...fileField.fieldProps}
          errorText={fileField.error}
          labelText="Новый аватар"
        />

        <Button
          type="submit"
          loading={isSubmitting}
          disabled={isSubmitting}>
          Редактировать
        </Button>
      </form>
    </Dialog>
  );
};
