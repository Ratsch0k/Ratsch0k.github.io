import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/dist/client/router'
import Home from './index'
import { NextPage } from 'next'
import '../i18n';

const SafeHydrate: NextPage = ({children}) => {
  return (
    <div suppressHydrationWarning className='h-full'>
      {typeof window === 'undefined' ? null : children}
    </div>
  );
};

const MyApp = () => {
  return (
    <>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Head>
    <SafeHydrate>
      <div className="h-full">
        <Home />
      </div>
    </SafeHydrate>
    </>
  );
};
export default MyApp
