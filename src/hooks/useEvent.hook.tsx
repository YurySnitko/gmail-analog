import { useCallback, useEffect, useRef } from 'react';

export function useEvent(
  handler: (...args: any) => any
): (...args: any) => any {
  const handlerRef = useRef<(...args: any) => any>();

  useEffect(() => {
    handlerRef.current = handler;
  });

  return useCallback((...args) => {
    const fn = handlerRef.current;
    if (fn) {
      return fn(...args);
    }
  }, []);
}
