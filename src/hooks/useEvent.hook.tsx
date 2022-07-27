import { useCallback, useEffect, useRef } from 'react';

export function useEvent(
  handler: (...args: any) => any
): (...args: any) => any {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handlerRef = useRef<(...args: any) => any>(() => {});

  useEffect(() => {
    handlerRef.current = handler;
  });

  return useCallback((...args) => {
    const fn = handlerRef.current;
    return fn(...args);
  }, []);
}
