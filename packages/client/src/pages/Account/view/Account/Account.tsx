import { useCallback } from 'react';

import { ReactComponent as UserIcon } from '@assets/svg/plain/user-icon.svg';
import { useDialog } from '@hooks/useDialog';
import { Button } from '@components/Button';
import { Icon } from '@components/Icon';

import { useEditPassword } from '../../hooks/useEditPassword';
import { useEditAvatar } from '../../hooks/useEditAvatar';
import { useEditUser } from '../../hooks/useEditUser';
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

  const updateViewerHandler = useEditUser();
  const updateViewer: UserEditorProps['onSubmit'] =
    useCallback(
      ({ values, cleanForm }) =>
        updateViewerHandler({
          values,
          onSuccess: () => {
            cleanForm();
            closeUserEditor();
          },
          onError: () =>
            alert('Cannot update user'),
        }),
      [updateViewerHandler]
    );

  const updateAvatarHandler = useEditAvatar();
  const updateAvatar: AvatarEditorProps['onSubmit'] =
    useCallback(
      ({ values, cleanForm }) =>
        updateAvatarHandler({
          values,
          onSuccess: () => {
            cleanForm();
            closeAvatarEditor();
          },
          onError: () =>
            alert('Cannot update user'),
        }),
      [updateAvatarHandler]
    );

  const updatePasswordHandler = useEditPassword();
  const updatePassword: PasswordEditorProps['onSubmit'] =
    useCallback(
      ({ values, cleanForm }) =>
        updatePasswordHandler({
          values,
          onSuccess: () => {
            cleanForm();
            closePasswordEditor();
          },
          onError: () =>
            alert('Cannot update user'),
        }),
      [updatePasswordHandler]
    );

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
  );
};
