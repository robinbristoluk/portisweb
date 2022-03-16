import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Portisweb</title>
      </Head>
      <div className='container mx-auto'>
        <Header>
          <h1>Portisweb</h1>
        </Header>
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp
