import { useInjection } from '@hooks/useInjection';
import { UpdateViewerRequest } from '@service/ViewerService';
import { useCallback } from 'react';

export const useEditUser = ({
  onSuccess,
  onError,
}: {
  onSuccess: () => void;
  onError: () => void;
}) => {
  const { viewerService } = useInjection();

  const callback = useCallback(
    async (values: UpdateViewerRequest) => {
      try {
        await viewerService.updateViewer(values);

        onSuccess();
      } catch {
        onError();
      }
    },
    [onSuccess, onError, viewerService]
  );

  return callback;
};
