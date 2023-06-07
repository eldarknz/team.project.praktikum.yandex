import { useCallback } from 'react';

import { useInjection } from '@hooks/useInjection';
import { UpdateAvatarRequest } from '@service/ViewerService';

export const useEditAvatar = () => {
  const { viewerService } = useInjection();

  const editAvatar = useCallback(
    async ({
      onSuccess,
      onError,
      values,
    }: {
      values: UpdateAvatarRequest;
      onSuccess: () => void;
      onError: () => void;
    }) => {
      try {
        await viewerService.updateAvatar(values);

        onSuccess();
      } catch {
        onError();
      }
    },
    [viewerService]
  );

  return editAvatar;
};
