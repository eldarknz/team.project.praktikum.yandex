import { useDialog } from '@hooks/useDialog';
import { Button } from '@components/Button';

import { ViewerModel } from '../../models';
import { UserEditor, UserDataList, PasswordEditor, AvatarEditor, Avatar } from '../../components';
import {
  useUpdateUserMutation,
  useUpdateAvatarMutation,
  useUpdatePasswordMutation,
} from '../../hooks';

import styles from './Account.module.scss';

export interface AccountProps {
  viewer: ViewerModel;
}

export const Account = ({ viewer }: AccountProps) => {
  const editUserDialog = useDialog();
  const editPasswordDialog = useDialog();
  const editAvatarDialog = useDialog();
  const { mutate: updateUser } = useUpdateUserMutation({
    onSuccess: editUserDialog.close,
    onError: () => alert('Cannot update user'),
  });
  const { mutate: updateAvatar } = useUpdateAvatarMutation({
    onSuccess: editAvatarDialog.close,
    onError: () => alert('Cannot update avatar'),
  });
  const { mutate: updatePassword } = useUpdatePasswordMutation({
    onSuccess: editAvatarDialog.close,
    onError: () => alert('Cannot update avatar'),
  });

  return (
    <div className={styles.page}>
      {editUserDialog.isOpen && (
        <UserEditor
          viewer={viewer}
          isOpen={editUserDialog.isOpen}
          onSubmit={updateUser}
          onOpenChange={editUserDialog.setState}
        />
      )}

      {editPasswordDialog.isOpen && (
        <PasswordEditor
          isOpen={editPasswordDialog.isOpen}
          onSubmit={updatePassword}
          onOpenChange={editPasswordDialog.setState}
        />
      )}

      {editAvatarDialog.isOpen && (
        <AvatarEditor
          isOpen={editAvatarDialog.isOpen}
          onSubmit={updateAvatar}
          onOpenChange={editAvatarDialog.setState}
        />
      )}

      <div className={styles.content}>
        <Avatar link={viewer.avatar} />
        <h4 className={styles.userName}>
          {viewer.display_name ? viewer.display_name : `${viewer.first_name} ${viewer.second_name}`}
        </h4>

        <UserDataList {...viewer} />

        <div className={styles.buttons}>
          <Button onClick={editUserDialog.open}>Изменить данные</Button>
          <Button onClick={editPasswordDialog.open}>Изменить пароль</Button>
          <Button onClick={editAvatarDialog.open}>Изменить аватар</Button>
        </div>
      </div>
    </div>
  );
};
