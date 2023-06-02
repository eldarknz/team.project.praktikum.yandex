import styles from './Account.module.scss';
import { useDialog } from '@hooks/useDialog';
import { useEditUser } from '@pages/Account/hooks/useEditUser';
import { Button } from '@components/Button';

import { useEditPassword } from '../../hooks/useEditPassword';
import { ViewerModel } from '../../models';
import {
  UserEditor,
  UserDataList,
  PasswordEditor,
} from '../../components';

export interface AccountProps {
  viewer: ViewerModel;
}

export const Account = ({
  viewer,
}: AccountProps) => {
  const {
    isOpen: isUserEditorOpen,
    close: closeUserEditor,
    open: openUserEditor,
    setState: setUserEditorState,
  } = useDialog();
  const {
    isOpen: isPasswordEditorOpen,
    close: closePasswordEditor,
    open: openPasswordEditor,
    setState: setPasswordEditorState,
  } = useDialog();

  const updateViewer = useEditUser({
    onSuccess: closeUserEditor,
    onError: () => alert('Cannot update user'),
  });

  const updatePassword = useEditPassword({
    onSuccess: closePasswordEditor,
    onError: () => alert('Cannot update user'),
  });

  return (
    <div className={styles.page}>
      <UserEditor
        viewer={viewer}
        isOpen={isUserEditorOpen}
        onSubmit={updateViewer}
        onOpenChange={setUserEditorState}
      />

      <PasswordEditor
        isOpen={isPasswordEditorOpen}
        onSubmit={updatePassword}
        onOpenChange={setPasswordEditorState}
      />

      <div className={styles.content}>
        <div className={styles.avatar}></div>
        <h4 className={styles.userName}>
          {viewer.firstName} {viewer.secondName}
        </h4>

        <UserDataList {...viewer} />

        <Button onClick={openUserEditor}>
          Изменить данные
        </Button>
        <Button onClick={openPasswordEditor}>
          Изменить пароль
        </Button>
      </div>
    </div>
  );
};
