import {useContext} from 'react';
import {ThemeContext} from '../context/ThemeContext';

export type Theme = 'light' | 'dark';

export function useDetectTheme(): () => Theme {
  return () => {
    const inLocalStorage = window.localStorage.getItem('theme');
    if (
      inLocalStorage === 'dark' ||
      (
        inLocalStorage === null &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      )
    ) {
      return 'dark';
    } else {
      return 'light';
    }
  };
}

export function useTheme() {
  return useContext(ThemeContext);
}

export default useTheme;