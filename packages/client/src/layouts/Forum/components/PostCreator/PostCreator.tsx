import {
  useCallback,
  useMemo,
  useState,
} from 'react';
import { Button } from '@components/Button';
import { Dialog } from '@components/Dialog';
import { Input } from '@components/Input';
import { Form } from '@components/Form';
import {
  FormSubmitHandler,
  FormContextState,
} from '@components/Form';
import { TNewPostProps } from '@layouts/Forum/models';
import styles from './PostCreator.module.scss';
import { Textarea } from '@components/Textarea';

export type PostCreatorForm = TNewPostProps;

export type PostFormContext =
  FormContextState<PostCreatorForm>;

export interface PostCreatorProps {
  onSubmit: FormSubmitHandler<PostCreatorForm>;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export const PostCreator = ({
  isOpen,
  onSubmit,
  onOpenChange,
}: PostCreatorProps) => {
  const [isSubmitting, setSubmitting] =
    useState(false);

  const handleSubmit: FormSubmitHandler<PostCreatorForm> =
    useCallback(
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
        <Input
          key="post_name"
          labelText="Тема"
          name="post_name"
        />
        <Textarea
          key="message"
          labelText="Сообщение"
          name="message"
        />
        <Button
          type="submit"
          loading={isSubmitting}
          disabled={isSubmitting}>
          Создать
        </Button>
      </Form>
    </Dialog>
  );
};
