import { useCallback, useState } from 'react';
import { Button } from '@components/Button';
import { Dialog } from '@components/Dialog';
import { Input } from '@components/Input';
import { Form } from '@components/Form';
import { FormSubmitHandler } from '@components/Form';
import styles from './TopicFormDialog.module.scss';
import { Textarea } from '@components/Textarea';

export type TopicFormDialogValues = {
  post_name: string;
  message: string;
};

export interface TopicFormDialogProps {
  onSubmit: FormSubmitHandler<TopicFormDialogValues>;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export const TopicFormDialog = ({ isOpen, onSubmit, onOpenChange }: TopicFormDialogProps) => {
  const [isSubmitting, setSubmitting] = useState(false);

  const handleSubmit: FormSubmitHandler<TopicFormDialogValues> = useCallback(
    async data => {
      setSubmitting(true);
      await onSubmit(data);
      setSubmitting(false);
    },
    [onSubmit]
  );

  return (
    <Dialog
      title="Новый пост"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      contentClass={styles.dialog}>
      <Form onSubmit={handleSubmit}>
        <Input key="post_name" labelText="Тема" name="post_name" />
        <Textarea key="message" labelText="Сообщение" name="message" />
        <Button type="submit" loading={isSubmitting} disabled={isSubmitting}>
          Создать
        </Button>
      </Form>
    </Dialog>
  );
};
