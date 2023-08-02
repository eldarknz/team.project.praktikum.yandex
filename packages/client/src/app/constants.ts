export const IS_RUNNING_SSR_ON_SERVER = import.meta.env.SSR;
export const IS_RUNNING_SSR_IN_BROWSER =
  typeof window !== 'undefined' ? window.__IS_SSR__ || false : false;
