import Head from 'next/head';
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import Telefoni from '@components/Services/Telefoni';
import Footer from '@components/ItInnovation/Footer';

const TelefoniPage = () => {
  return (
    <>
      <Head>
        <title>Telefoni</title>
      </Head>

      <MainLayout>
        <main>
          <Telefoni />
        </main>
        <Footer/>
      </MainLayout>
    </>
  )
}

export default TelefoniPage;