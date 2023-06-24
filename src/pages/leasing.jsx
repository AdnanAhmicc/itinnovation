import Head from 'next/head';
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import Leasing from '@components/Services/Leasing';
import Footer from '@components/ItInnovation/Footer';

const LeasingPage = () => {
  return (
    <>
      <Head>
        <title>Leasing</title>
      </Head>

      <MainLayout>
        <main>
          <Leasing />
        </main>
        <Footer/>
      </MainLayout>
    </>
  )
}

export default LeasingPage;