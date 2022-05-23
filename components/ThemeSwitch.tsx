import useTheme from './hooks/useTheme';
import IconButton from './IconButton';
import SunIcon from './icons/SunIcon';
import MoonIcon from './icons/MoonIcon';
import {useTranslation} from 'react-i18next';

export const ThemeSwitch = () => {
  const {theme, setTheme} = useTheme();
  const {t} = useTranslation();

  return (
  <IconButton
    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    tooltip={t('switchTheme')}
    tooltipProps={{
      position: 'top',
    }}
  >
      {
        theme === 'dark' ?
          <MoonIcon/>:
          <SunIcon/>
      }
    </IconButton>
  );
};

export default ThemeSwitch;