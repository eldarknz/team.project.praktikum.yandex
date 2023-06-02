import { useInjection } from '@hooks/useInjection';
import { UpdatePasswordRequest } from '@service/ViewerService';
import { useCallback } from 'react';

export const useEditPassword = ({
  onSuccess,
  onError,
}: {
  onSuccess: () => void;
  onError: () => void;
}) => {
  const { viewerService } = useInjection();

  const callback = useCallback(
    async (values: UpdatePasswordRequest) => {
      try {
        await viewerService.updatePassword(
          values
        );

        onSuccess();
      } catch {
        onError();
      }
    },
    [onSuccess, onError, viewerService]
  );

  return callback;
};
