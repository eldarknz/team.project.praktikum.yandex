import { Button } from '@components/Button';
import { Dialog } from '@components/Dialog';
import { Input } from '@components/Input';
import { useForm } from '@core/Validation';
import { validate } from '@service/Validate';
import { useTextField } from '@core/Validation/useTextField';

import styles from './PasswordEditor.module.scss';

export type PasswordEditorForm = {
  oldPassword: string;
  newPassword: string;
};

export interface PasswordEditorProps {
  onSubmit: (values: PasswordEditorForm) => Promise<void>;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}
export const PasswordEditor = ({ isOpen, onSubmit, onOpenChange }: PasswordEditorProps) => {
  const oldPassField = useTextField({
    value: '',
    name: 'oldPassword',
    rules: [],
  });
  const newPassField = useTextField({
    value: '',
    name: 'newPassword',
    rules: [value => (validate.password(value || '') ? null : validate.errorMessages.password)],
  });
  const repeatPassField = useTextField({
    value: '',
    name: 'repeatPassword',
    rules: [value => (newPassField.value === value ? null : 'Пароли должны совпадать')],
  });

  const { isSubmitting, formProps } = useForm({
    fields: [oldPassField, newPassField, repeatPassField],
    onSubmit: async () => {
      await onSubmit({
        oldPassword: oldPassField.value,
        newPassword: newPassField.value,
      });
    },
  });

  return (
    <Dialog
      title="Редактировать пароль"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      contentClass={styles.dialog}>
      <form {...formProps}>
        <Input
          {...oldPassField.fieldProps}
          errorText={oldPassField.error}
          labelText="Старый пароль"
          type="password"
        />
        <Input
          {...newPassField.fieldProps}
          labelText="Новый пароль"
          errorText={newPassField.error}
          type="password"
        />
        <Input
          {...repeatPassField.fieldProps}
          labelText="Повторите пароль"
          errorText={repeatPassField.error}
          type="password"
        />

        <Button type="submit" loading={isSubmitting} disabled={isSubmitting}>
          Редактировать
        </Button>
      </form>
    </Dialog>
  );
};
