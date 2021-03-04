import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import Head from 'next/Head';

import Navbar from '../components/Navbar';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Navbar />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
