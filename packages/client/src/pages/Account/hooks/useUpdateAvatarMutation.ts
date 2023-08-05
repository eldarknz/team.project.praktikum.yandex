import { useCallback, useState } from 'react';

import { setUser } from '@workspace/shared/src/store/reducers';
import { useServices } from '@core/ServicesContext';
import { QueryHandler } from '@utils/hooks';
import { useAppDispatch } from '@core/StoreContext';

import { AvatarEditorProps } from '../components';

export const useUpdateAvatarMutation = ({ onError, onSuccess }: QueryHandler) => {
  const [isFetching, setFetching] = useState(false);
  const dispatch = useAppDispatch();
  const services = useServices();

  const mutate: AvatarEditorProps['onSubmit'] = useCallback(
    async values => {
      setFetching(true);

      try {
        const response = await services.viewer.updateAvatar(values);

        dispatch(setUser(response));

        onSuccess();
      } catch (error) {
        console.error(error);

        onError();
      }

      setFetching(false);
    },
    [dispatch, onError, onSuccess, services.viewer]
  );

  return { mutate, isFetching };
};
