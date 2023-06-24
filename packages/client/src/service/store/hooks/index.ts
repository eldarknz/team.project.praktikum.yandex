import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
} from 'react-redux';
import { RootState, AppDispatch } from '..';

export const useAppDispatch: () => AppDispatch =
  useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> =
  useSelector;
