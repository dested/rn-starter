import {DependencyList, useEffect} from 'react';

export function useEffectAsync(effect: () => Promise<any>, deps?: DependencyList) {
  useEffect(() => {
    effect().catch((ex) => {
      console.error(ex);
    });
  }, deps);
}
