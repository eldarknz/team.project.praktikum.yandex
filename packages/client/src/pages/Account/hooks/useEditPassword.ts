import { useCallback } from 'react';

import { useInjection } from '@hooks/useInjection';
import { UpdatePasswordRequest } from '@service/ViewerService';

export const useEditPassword = () => {
  const { viewerService } = useInjection();

  const callback = useCallback(
    async ({
      onSuccess,
      onError,
      values,
    }: {
      values: UpdatePasswordRequest;
      onSuccess: () => void;
      onError: () => void;
    }) => {
      try {
        await viewerService.updatePassword(
          values
        );

        onSuccess();
      } catch {
        onError();
      }
    },
    [viewerService]
  );

  return callback;
};
