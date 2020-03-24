import {useEffect, useState} from 'react';

export function useClock(duration: number) {
  const [clock, setClock] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setClock(Math.random());
    }, duration);
    return () => {
      clearInterval(id);
    };
  }, [duration]);
}
