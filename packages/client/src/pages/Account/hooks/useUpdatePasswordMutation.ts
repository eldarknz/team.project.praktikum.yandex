import { useCallback, useState } from 'react';

import { setUser } from '@workspace/shared/src/store/reducers';
import { useServices } from '@core/ServicesContext';
import { QueryHandler } from '@utils/hooks';
import { useAppDispatch } from '@core/StoreContext';

import { PasswordEditorProps } from '../components';

export const useUpdatePasswordMutation = ({ onError, onSuccess }: QueryHandler) => {
  const [isFetching, setFetching] = useState(false);
  const dispatch = useAppDispatch();
  const services = useServices();

  const mutate: PasswordEditorProps['onSubmit'] = useCallback(
    async values => {
      setFetching(true);

      try {
        const response = await services.viewer.updatePassword(values);

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
