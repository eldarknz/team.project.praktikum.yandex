export const getRightInitialState = <T>(initialState: T, reducer: string): T => {
  const isServer = !(typeof window !== 'undefined' && window.document);

  return isServer
    ? initialState
    : window.__REDUX_STORE__
    ? (window.__REDUX_STORE__?.[reducer as never] as T) || initialState
    : initialState;
};
