import { Button } from '@components/Button';
import { Dialog } from '@components/Dialog';
import { Input } from '@components/Input';
import { useForm, useTextField } from '@core/Validation';

import styles from './TopicFormDialog.module.scss';

export type TopicFormDialogValues = {
  theme: string;
};

export interface TopicFormDialogProps {
  onSubmit: (values: TopicFormDialogValues) => Promise<void> | void;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export const TopicFormDialog = ({ isOpen, onSubmit, onOpenChange }: TopicFormDialogProps) => {
  const themeField = useTextField({
    name: 'post_name',
    rules: [value => (value ? null : 'Тема')],
  });

  const { isSubmitting, formProps } = useForm({
    fields: [themeField],
    onSubmit: async () => {
      if (!themeField.value) return;

      await onSubmit({ theme: themeField.value });
    },
  });

  return (
    <Dialog
      title="Новый пост"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      contentClass={styles.dialog}>
      <form {...formProps}>
        <Input {...themeField.fieldProps} labelText="Тема" type="password" />
        <Button type="submit" loading={isSubmitting} disabled={isSubmitting}>
          Создать
        </Button>
      </form>
    </Dialog>
  );
};
