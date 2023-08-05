import { Button } from '@components/Button';
import { Dialog } from '@components/Dialog';
import { Input } from '@components/Input';
import { useForm, useTextField } from '@core/Validation';

import styles from './TopicFormDialog.module.scss';
import { Textarea } from '@components/Textarea';

export type TopicFormDialogValues = {
  title: string;
  content: string;
};

export interface TopicFormDialogProps {
  isOpen: boolean;
  onSubmit: (values: TopicFormDialogValues) => Promise<void> | void;
  onOpenChange: (isOpen: boolean) => void;
}

export const TopicFormDialog = ({ isOpen, onSubmit, onOpenChange }: TopicFormDialogProps) => {
  const titleField = useTextField({
    name: 'title',
    rules: [value => (value ? null : 'Укажите заголовок поста')],
  });
  const contentField = useTextField({
    name: 'content',
    rules: [value => (value ? null : 'Укажите контент поста')],
  });

  const { isSubmitting, formProps } = useForm({
    fields: [titleField, contentField],
    onSubmit: async () => {
      if (!titleField.value) return;

      await onSubmit({ title: titleField.value, content: contentField.value });
    },
  });

  return (
    <Dialog
      title="Новый пост"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      contentClass={styles.dialog}>
      <form {...formProps}>
        <Input {...titleField.fieldProps} labelText="Тема" type="text" />
        <Textarea {...contentField.fieldProps} labelText="Тема" />
        <Button type="submit" loading={isSubmitting} disabled={isSubmitting}>
          Создать
        </Button>
      </form>
    </Dialog>
  );
};
