import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/dist/client/router';
import Home from './index';
import { appWithTranslation } from 'next-i18next';

const MyApp = () => {
  return (
    <>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Head>
    <div className="h-full">
      <Home />
    </div>
    </>
  );
};

export default appWithTranslation(MyApp);
