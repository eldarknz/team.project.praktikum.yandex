import { Button } from '@components/Button';
import { Dialog } from '@components/Dialog';
import { Input } from '@components/Input';

import { ViewerModel } from '@pages/Account/models';
import { useForm } from '@core/Validation';
import { useTextField } from '@core/Validation/useTextField';
import { validate } from '@service/Validate';

import styles from './UserEditor.module.scss';

export type UserEditorForm = {
  email: string;
  login: string;
  first_name: string;
  second_name: string;
  display_name: string;
  phone: string;
};

export interface UserEditorProps {
  viewer: ViewerModel;
  onSubmit: (values: UserEditorForm) => Promise<void> | void;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export const UserEditor = ({ viewer, isOpen, onSubmit, onOpenChange }: UserEditorProps) => {
  const emailField = useTextField({
    value: viewer.email || '',
    name: 'email',
    rules: [value => (validate.email(value || '') ? null : validate.errorMessages.email)],
  });
  const loginField = useTextField({
    value: viewer.login || '',
    name: 'login',
    rules: [value => (validate.login(value || '') ? null : validate.errorMessages.login)],
  });
  const firstNameField = useTextField({
    value: viewer.first_name || '',
    name: 'first_name',
    rules: [value => (validate.name(value || '') ? null : validate.errorMessages.name)],
  });
  const secondNameField = useTextField({
    value: viewer.second_name || '',
    name: 'second_name',
    rules: [value => (validate.name(value || '') ? null : validate.errorMessages.name)],
  });
  const phoneField = useTextField({
    value: viewer.phone || '',
    name: 'phone',
    rules: [value => (validate.phone(value || '') ? null : validate.errorMessages.phone)],
  });
  const { formProps, isSubmitting } = useForm({
    fields: [emailField, loginField, firstNameField, secondNameField, phoneField],
    onSubmit: async () => {
      await onSubmit({
        login: loginField.value,
        email: emailField.value,
        first_name: firstNameField.value,
        second_name: secondNameField.value,
        display_name: viewer.display_name || '',
        phone: phoneField.value,
      });
    },
  });

  return (
    <Dialog
      title="Редактировать данные"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      contentClass={styles.dialog}>
      <form {...formProps}>
        <Input {...emailField.fieldProps} errorText={emailField.error} labelText="E-mail" />
        <Input {...loginField.fieldProps} labelText="Логин" errorText={loginField.error} />
        <Input {...firstNameField.fieldProps} labelText="Имя" errorText={firstNameField.error} />
        <Input
          {...secondNameField.fieldProps}
          labelText="Фамилия"
          errorText={secondNameField.error}
        />
        <Input {...phoneField.fieldProps} labelText="Телефон" errorText={phoneField.error} />

        <Button type="submit" loading={isSubmitting} disabled={isSubmitting}>
          Редактировать
        </Button>
      </form>
    </Dialog>
  );
};
