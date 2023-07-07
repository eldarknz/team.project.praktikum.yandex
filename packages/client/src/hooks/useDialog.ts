import { useCallback, useState } from 'react';

export const useDialog = (initialOpen?: boolean) => {
  const [isOpen, setState] = useState(Boolean(initialOpen));

  const close = useCallback(() => setState(false), []);
  const open = useCallback(() => setState(true), []);

  return {
    isOpen,
    setState,
    open,
    close,
  };
};
