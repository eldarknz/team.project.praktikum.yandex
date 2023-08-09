import { useCallback } from 'react';

import { useDialog } from '@hooks/useDialog';
import { Button } from '@components/Button';
import { useControllers } from '@core/ControllersContext';

import { ViewerModel } from '../../models';
import {
  UserEditor,
  UserDataList,
  PasswordEditor,
  AvatarEditor,
  UserEditorProps,
  AvatarEditorProps,
  PasswordEditorProps,
  Avatar,
} from '../../components';

import styles from './Account.module.scss';

export interface AccountProps {
  viewer: ViewerModel;
}

export const Account = ({ viewer }: AccountProps) => {
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
  const {
    isOpen: isAvatarEditorOpen,
    close: closeAvatarEditor,
    open: openAvatarEditor,
    setState: setAvatarEditorState,
  } = useDialog();
  const controllers = useControllers();

  const updateUser: UserEditorProps['onSubmit'] = useCallback(
    values => {
      return controllers.viewer.editUser({
        values,
        onSuccess: () => {
          closeUserEditor();
        },
        onError: () => alert('Cannot update user'),
      });
    },
    [closeUserEditor, controllers.viewer],
  );

  const updateAvatar: AvatarEditorProps['onSubmit'] = useCallback(
    values => {
      return controllers.viewer.editAvatar({
        values,
        onSuccess: () => {
          closeAvatarEditor();
        },
        onError: () => alert('Cannot update avatar'),
      });
    },
    [closeAvatarEditor, controllers.viewer],
  );

  const updatePassword: PasswordEditorProps['onSubmit'] = useCallback(
    values => {
      return controllers.viewer.editPassword({
        values,
        onSuccess: () => {
          closePasswordEditor();
        },
        onError: () => alert('Cannot update password'),
      });
    },
    [closePasswordEditor, controllers.viewer],
  );

  return (
    <div className={styles.page}>
      {isUserEditorOpen && (
        <UserEditor
          viewer={viewer}
          isOpen={isUserEditorOpen}
          onSubmit={updateUser}
          onOpenChange={setUserEditorState}
        />
      )}

      {isPasswordEditorOpen && (
        <PasswordEditor
          isOpen={isPasswordEditorOpen}
          onSubmit={updatePassword}
          onOpenChange={setPasswordEditorState}
        />
      )}

      {isAvatarEditorOpen && (
        <AvatarEditor
          isOpen={isAvatarEditorOpen}
          onSubmit={updateAvatar}
          onOpenChange={setAvatarEditorState}
        />
      )}

      <div className={styles.content}>
        <Avatar link={viewer.avatar} />
        <h4 className={styles.userName}>
          {viewer.display_name ? viewer.display_name : `${viewer.first_name} ${viewer.second_name}`}
        </h4>

        <UserDataList {...viewer} />

        <div className={styles.buttons}>
          <Button onClick={openUserEditor}>Изменить данные</Button>
          <Button onClick={openPasswordEditor}>Изменить пароль</Button>
          <Button onClick={openAvatarEditor}>Изменить аватар</Button>
        </div>
      </div>
    </div>
  );
};
