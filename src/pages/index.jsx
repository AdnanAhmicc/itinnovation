import Head from 'next/head';
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import Header from '@components/ItInnovation/Header';
import Features from '@components/ItInnovation/Features';
import About from '@components/ItInnovation/About';
import Services from '@components/ItInnovation/Services';
import Contact from '@components/ItInnovation/Contact';
import Footer from '@components/ItInnovation/Footer';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>ItInnovation - Technology</title>
      </Head>

      <MainLayout>
        <Header />
        <main>
          <Features />
          <About />
          <Services />
          <Contact />
        </main>
        <Footer/>
      </MainLayout>
    </>
  )
}

export default HomePage;