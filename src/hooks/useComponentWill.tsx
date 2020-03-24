import {useEffect} from 'react';

type PromiseOrNot<T> = Promise<T> | T;

export function useComponentWill(mount: () => PromiseOrNot<void>, unmount: () => PromiseOrNot<void> = () => {}) {
  useEffect(() => {
    mount();
    return unmount;
  }, []);
}
