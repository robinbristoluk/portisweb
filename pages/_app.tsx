import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Portisweb</title>
      </Head>
      <div className='container mx-auto'>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp
