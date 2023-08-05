import { useForm, useTextField } from '@core/Validation';

import { Textarea } from '@components/Textarea';
import { Button } from '@components/Button';

export type MessageFormValues = {
  text: string;
};

export interface MessageFormProps {
  onSubmit: (values: MessageFormValues) => Promise<void> | void;
}

export const MessageForm = ({ onSubmit }: MessageFormProps) => {
  const textField = useTextField({
    name: 'text',
    rules: [value => (value ? null : 'Укажите текст')],
  });

  const form = useForm({
    fields: [textField],
    onSubmit: async () => {
      if (!textField.value) return;

      await onSubmit({ text: textField.value });
      form.clear();
    },
  });

  return (
    <form {...form.formProps}>
      <Textarea {...textField.fieldProps} labelText="Тема" rows={5} />
      <Button type="submit" loading={form.isSubmitting} disabled={form.isSubmitting}>
        Отправить
      </Button>
    </form>
  );
};
