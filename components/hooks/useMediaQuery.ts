import {useCallback, useEffect, useState} from 'react';

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState<boolean>(window.matchMedia(query).matches);

  const handleChange = useCallback((ev: MediaQueryListEvent) => {
    setMatches(ev.matches);
  }, []);

  useEffect(() => {
    const media = window.matchMedia(query);

    media.addEventListener('change', handleChange);

    return () => {
      media.removeEventListener('change', handleChange);
    }
  });

  return matches;
}