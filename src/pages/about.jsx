import Head from 'next/head';
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import NavbarPages from '@components/ItInnovation/NavbarPages';
import About from '@components/ItInnovation/About';
import Services from '@components/ItInnovation/Services';
import Contact from '@components/ItInnovation/Contact';
import Footer from '@components/ItInnovation/Footer';
import Header from '@components/ItInnovation/Header';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>

      <MainLayout>
        <NavbarPages />
        <main>
          <About />
          <Services />
          <Contact />
        </main>
        <Footer/>
      </MainLayout>
    </>
  )
}

export default AboutPage;