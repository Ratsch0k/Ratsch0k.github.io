import React, {useCallback, useState} from 'react';
import {useDetectTheme} from '../hooks/useTheme';

export type Theme = 'dark' | 'light';

export interface ThemeContextValues {
  theme: Theme | null;
  setTheme(theme: Theme): void;
  useSystemPreferences(): void;
}

export const ThemeContext = React.createContext<ThemeContextValues>({
  theme: null,
  setTheme: () => undefined,
  useSystemPreferences: () => undefined,
});

export interface ThemeContextProviderProps {
  children: React.ReactNode;
}

export function ThemeContextProvider({children}: ThemeContextProviderProps) {
  const detectTheme = useDetectTheme();
  const [theme, setTheme] = useState<Theme>(detectTheme());

  const changeTheme = useCallback((theme) => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    window.localStorage.setItem('theme', theme);
    setTheme(theme);
  }, []);

  const useSystemPreferences = useCallback(() => {
    window.localStorage.removeItem('theme');
    setTheme(detectTheme());
  }, [detectTheme]);
  
  return (
    <ThemeContext.Provider
      value={{
        useSystemPreferences,
        theme,
        setTheme: changeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider;
