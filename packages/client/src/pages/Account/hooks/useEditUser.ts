import { useCallback } from 'react';
import { useInjection } from '@hooks/useInjection';
import { UpdateUserRequest } from '@service/ViewerService';

export const useEditUser = () => {
  const { viewerService } = useInjection();

  const callback = useCallback(
    async ({
      onSuccess,
      onError,
      values,
    }: {
      values: UpdateUserRequest;
      onSuccess: () => void;
      onError: () => void;
    }) => {
      try {
        await viewerService.updateUser(values);

        onSuccess();
      } catch {
        onError();
      }
    },
    [viewerService]
  );

  return callback;
};
