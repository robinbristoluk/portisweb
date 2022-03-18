import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import BreakpointVisualiser from '../components/development/breakpoint-visualiser';

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
        <div className='bg-white p-3'>
          <Component {...pageProps} />
        </div>
        <Footer />
        {
          /* TODO: Use dynamic import */
          process.env.NODE_ENV === 'development' && <BreakpointVisualiser />
        }
      </div>
    </>
  );
}

export default MyApp
