import Head from 'next/head';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import AboutUs from '../components/AboutUs';

import styles from '../styles/Home.module.css';

export default function Home() {
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
      <AboutUs />
    </>
  );
}
