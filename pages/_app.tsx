import '../styles/globals.css'
import Head from 'next/head'
import Home from './index'
import '../i18n';
import {useTranslation} from 'react-i18next'
import {PropsWithChildren, useEffect, useState} from 'react';
import ThemeContextProvider from '../components/context/ThemeContext';

/**
 * The whole site depends on browser APIs during render, so nothing is rendered
 * until after the first client-side commit.
 */
const SafeHydrate = ({children}: PropsWithChildren) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div suppressHydrationWarning className='h-full'>
      {mounted ? children : null}
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
      <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no' />
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
