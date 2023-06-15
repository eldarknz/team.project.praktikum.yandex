import { useCallback } from 'react';

import { ReactComponent as UserIcon } from '@assets/svg/plain/user-icon.svg';
import { useDialog } from '@hooks/useDialog';
import { Button } from '@components/Button';
import { Icon } from '@components/Icon';
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
} from '../../components';

import styles from './Account.module.scss';

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
  const {
    isOpen: isAvatarEditorOpen,
    close: closeAvatarEditor,
    open: openAvatarEditor,
    setState: setAvatarEditorState,
  } = useDialog();
  const controllers = useControllers();

  const updateUser: UserEditorProps['onSubmit'] =
    useCallback(
      ({ values, cleanForm }) => {
        controllers.viewer.editUser({
          values,
          onSuccess: () => {
            cleanForm();
            closeUserEditor();
          },
          onError: () =>
            alert('Cannot update user'),
        });
      },
      [closeUserEditor, controllers.viewer]
    );

  const updateAvatar: AvatarEditorProps['onSubmit'] =
    useCallback(
      ({ values, cleanForm }) => {
        controllers.viewer.editAvatar({
          values,
          onSuccess: () => {
            cleanForm();
            closeAvatarEditor();
          },
          onError: () =>
            alert('Cannot update avatar'),
        });
      },
      [closeAvatarEditor, controllers.viewer]
    );

  const updatePassword: PasswordEditorProps['onSubmit'] =
    useCallback(
      ({ values, cleanForm }) => {
        controllers.viewer.editPassword({
          values,
          onSuccess: () => {
            cleanForm();
            closePasswordEditor();
          },
          onError: () =>
            alert('Cannot update password'),
        });
      },
      [closePasswordEditor, controllers.viewer]
    );

  return (
    <div className={styles.page}>
      <UserEditor
        viewer={viewer}
        isOpen={isUserEditorOpen}
        onSubmit={updateUser}
        onOpenChange={setUserEditorState}
      />

      <PasswordEditor
        isOpen={isPasswordEditorOpen}
        onSubmit={updatePassword}
        onOpenChange={setPasswordEditorState}
      />

      <AvatarEditor
        isOpen={isAvatarEditorOpen}
        onSubmit={updateAvatar}
        onOpenChange={setAvatarEditorState}
      />

      <div className={styles.content}>
        <div className={styles.avatar}>
          <Icon icon={<UserIcon />} size={120} />
        </div>
        <h4 className={styles.userName}>
          {viewer.firstName} {viewer.secondName}
        </h4>

        <UserDataList {...viewer} />

        <div className={styles.buttons}>
          <Button onClick={openUserEditor}>
            Изменить данные
          </Button>
          <Button onClick={openPasswordEditor}>
            Изменить пароль
          </Button>
          <Button onClick={openAvatarEditor}>
            Изменить аватар
          </Button>
        </div>
      </div>
    </div>
  );
};
