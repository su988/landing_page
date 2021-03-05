import Head from 'next/head';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import AboutUs from '../components/AboutUs';
import Menu from '../components/Menu';
import ImageGallery from '../components/ImageGallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

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
      <Menu />
      <ImageGallery />
      <Contact />
      <Footer />
    </>
  );
}
