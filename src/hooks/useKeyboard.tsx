import {useEffect} from 'react';
import {Keyboard} from 'react-native';

export function useKeyboard(willShow: () => void, willHide: () => void) {
  useEffect(() => {
    Keyboard.addListener('keyboardWillShow', willShow);
    Keyboard.addListener('keyboardWillHide', willHide);
    return () => {
      Keyboard.removeListener('keyboardWillShow', willShow);
      Keyboard.removeListener('keyboardWillHide', willHide);
    };
  });
}
