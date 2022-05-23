import '../styles/globals.css'
import Head from 'next/head'
import Home from './index'
import {NextPage} from 'next'
import '../i18n';
import {useTranslation} from 'react-i18next'
import {useEffect} from 'react';
import ThemeContextProvider from '../components/context/ThemeContext';

const SafeHydrate: NextPage = ({children}) => {
  return (
    <div suppressHydrationWarning className='h-full'>
      {typeof window === 'undefined' ? null : children}
    </div>
  );
};

const MyApp = () => {
  const {i18n} = useTranslation();

  useEffect(() => {
    document.documentElement.setAttribute('lang', i18n.language);
  }, [i18n.language])

  return (
    <>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Head>
    <SafeHydrate>
      <div className="h-full">
        <ThemeContextProvider>
          <Home />
        </ThemeContextProvider>
      </div>
    </SafeHydrate>
    </>
  );
};
export default MyApp
