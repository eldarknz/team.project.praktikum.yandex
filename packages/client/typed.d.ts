import { RootState } from '@service/store';

declare global {
  interface Window {
    __REDUX_STORE__?: RootState;
  }
}

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}
