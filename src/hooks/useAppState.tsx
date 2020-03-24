import {useEffect, useState} from 'react';
import {AppState, AppStateStatus} from 'react-native';

export function useAppState() {
  const [currentState, setCurrentState] = useState(AppState.currentState);
  function handler(state: AppStateStatus) {
    if (state !== currentState) {
      setCurrentState(currentState);
    }
  }

  useEffect(() => {
    AppState.addEventListener('change', handler);

    return () => {
      AppState.removeEventListener('change', handler);
    };
  });
  return currentState;
}
