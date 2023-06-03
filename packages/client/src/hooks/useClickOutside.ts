import { RefObject, useEffect } from 'react';
export default function useClickOutside<T>(
  elem: RefObject<T | HTMLDivElement>,
  handler: () => void,
  attached: boolean
) {
  useEffect(() => {
    if (!attached) return;

    const handleClick = (e: Event) => {
      if (!elem.current) return;
      /*@ts-expect-error*/
      if (!elem.current.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener(
      'click',
      handleClick
    );

    return () =>
      document.removeEventListener(
        'click',
        handleClick
      );
  }, [elem, handler, attached]);
}
