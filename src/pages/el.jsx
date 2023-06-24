import Head from 'next/head';
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import El from '@components/Services/El';
import Footer from '@components/ItInnovation/Footer';

const ElPage = () => {
  return (
    <>
      <Head>
        <title>El</title>
      </Head>

      <MainLayout>
        <main>
          <El />
        </main>
        <Footer/>
      </MainLayout>
    </>
  )
}

export default ElPage